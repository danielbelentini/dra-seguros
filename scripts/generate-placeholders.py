"""
Gera imagens placeholder (.webp + fallback .jpg) na paleta da marca D.R.A. Seguros.
Uso: python3 scripts/generate-placeholders.py
Substitua os arquivos gerados em /public/images pelas fotos reais quando disponíveis,
mantendo o mesmo nome de arquivo (ou atualize os componentes que os referenciam).
"""
from PIL import Image, ImageDraw, ImageFont
import os
import math
import random

OUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
os.makedirs(OUT_DIR, exist_ok=True)

MAROON = (110, 21, 38)
MAROON_DARK = (74, 14, 27)
CREAM = (247, 237, 228)
CREAM_LIGHT = (253, 250, 246)
GOLD = (201, 162, 75)


def get_font(size, bold=False):
    candidates = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def diagonal_gradient(size, color_a, color_b):
    w, h = size
    img = Image.new('RGB', size, color_a)
    px = img.load()
    max_d = w + h
    for y in range(h):
        for x in range(0, w, 2):
            t = (x + y) / max_d
            c = lerp(color_a, color_b, t)
            px[x, y] = c
            if x + 1 < w:
                px[x + 1, y] = c
    return img


def add_label(img, label, sub=None):
    draw = ImageDraw.Draw(img, 'RGBA')
    w, h = img.size
    # subtle center panel so the label is always legible regardless of bg
    panel_w, panel_h = min(w - 40, 520), 108 if sub else 74
    px0 = (w - panel_w) / 2
    py0 = (h - panel_h) / 2
    draw.rounded_rectangle(
        [px0, py0, px0 + panel_w, py0 + panel_h], radius=10, fill=(255, 255, 255, 235)
    )
    font = get_font(26, bold=True)
    tw = draw.textlength(label, font=font)
    draw.text((w / 2 - tw / 2, py0 + (22 if sub else 24)), label, fill=MAROON_DARK, font=font)
    if sub:
        font2 = get_font(16)
        tw2 = draw.textlength(sub, font=font2)
        draw.text((w / 2 - tw2 / 2, py0 + 62), sub, fill=(90, 70, 70), font=font2)
    return img


def crest_watermark(img, opacity=26):
    """Desenha um arco simples (eco do brasão da logo) bem sutil."""
    w, h = img.size
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    cx, cy = w * 0.5, h * 0.42
    r = min(w, h) * 0.42
    d.arc([cx - r, cy - r, cx + r, cy + r], start=200, end=340, fill=(255, 255, 255, opacity), width=3)
    return Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')


def save_pair(img, name, quality=82):
    webp_path = os.path.join(OUT_DIR, f'{name}.webp')
    jpg_path = os.path.join(OUT_DIR, f'{name}.jpg')
    img.save(webp_path, 'WEBP', quality=quality)
    img.convert('RGB').save(jpg_path, 'JPEG', quality=quality)
    print('gerado:', name)


# 1) Hero — retrato institucional (lado direito do hero)
hero = diagonal_gradient((1000, 1250), MAROON, MAROON_DARK)
hero = crest_watermark(hero, 30)
hero = add_label(hero, 'Foto: Daniela (retrato)', '1000x1250 recomendado')
save_pair(hero, 'hero')

# 2) About — foto da corretora atendendo/em escritório
about = diagonal_gradient((900, 1100), CREAM_LIGHT, CREAM)
draw = ImageDraw.Draw(about)
draw.rectangle([0, 0, 900, 1100], outline=MAROON, width=6)
about = add_label(about, 'Foto: Daniela no atendimento', '900x1100 recomendado')
save_pair(about, 'about')

# 3) CTA background — cor sólida por enquanto (a seção já aplica um overlay
# escuro + texto branco por cima; um selo de texto aqui atrapalhava a leitura
# do título). Troque depois pela foto real mantendo o nome do arquivo.
cta_bg = Image.new('RGB', (1920, 1080), MAROON_DARK)
save_pair(cta_bg, 'cta-bg', quality=90)

# 4) Avatares de depoimentos (3)
names = ['avatar-1', 'avatar-2', 'avatar-3']
tones = [ (168,69,90), (143,36,56), (110,21,38) ]
for nm, tone in zip(names, tones):
    av = Image.new('RGB', (240, 240), tone)
    d = ImageDraw.Draw(av)
    d.ellipse([20, 20, 220, 220], fill=lerp(tone, (255,255,255), 0.15))
    font = get_font(20, bold=True)
    label = 'Foto'
    tw = d.textlength(label, font=font)
    d.text((120 - tw/2, 110), label, fill=(255,255,255), font=font)
    save_pair(av, nm, quality=85)

# 5) OG image (compartilhamento em redes sociais) 1200x630
og = diagonal_gradient((1200, 630), MAROON, MAROON_DARK)
og = crest_watermark(og, 30)
draw = ImageDraw.Draw(og)
font_title = get_font(46, bold=True)
draw.text((60, 250), 'D.R.A. Seguros', fill=(255,255,255), font=font_title)
font_sub = get_font(22)
draw.text((60, 320), 'Daniela Regina de Almeida — Corretora de Seguros', fill=(240, 225, 220), font=font_sub)
save_pair(og, 'og-image', quality=85)

print('Concluido.')
