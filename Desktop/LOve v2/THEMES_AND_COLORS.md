# 🎨 COLOR THEMES & CUSTOMIZATION REFERENCE

## Current Theme: Moonlit Romance (Default)

**Colors:**
- Primary: Soft Pink (#ffb6d9)
- Accent: Hot Pink (#ff85b8) 
- Text: Light Purple (#e8d5ff)
- Background: Deep Navy (#0a0e27)
- Moon: Golden Yellow (#fffacd)

This theme is perfect for a romantic, dreamy proposal.

---

## 🌌 Theme 1: Ocean Midnight

For a calm, mysterious, oceanic feel.

**In `styles.css`, replace these color values:**

```css
/* Starfield & Moon */
.starfield {
    opacity: 0.8; /* Show more stars */
}

.moon {
    background: radial-gradient(circle at 35% 35%, #e0f7ff, #b0e0e6);
    box-shadow: 
        0 0 60px rgba(176, 224, 230, 0.8),
        0 0 100px rgba(176, 224, 230, 0.5),
        inset -30px -30px 60px rgba(0, 0, 0, 0.3);
}

/* Text Colors */
.handwritten-title { color: #87ceeb; }
.opening-letter { color: #add8e6; }
.proposal-text { color: #b0e0e6; }
.glowing-heart { 
    filter: drop-shadow(0 0 20px rgba(135, 206, 235, 0.8));
}

/* Button */
.yes-button {
    background: linear-gradient(135deg, #4169e1 0%, #1e90ff 100%);
    box-shadow: 0 8px 25px rgba(65, 105, 225, 0.4);
}

.yes-button:hover {
    box-shadow: 0 12px 35px rgba(65, 105, 225, 0.6);
}
```

---

## 🌹 Theme 2: Sunset Romance

For a warm, golden, sunset-inspired feel.

**Replace in `styles.css`:**

```css
.proposal-wrapper {
    background: linear-gradient(135deg, #b35806 0%, #8b4513 50%, #654321 100%);
}

.moon {
    background: radial-gradient(circle at 35% 35%, #ffa500, #ff8c00);
    box-shadow: 
        0 0 60px rgba(255, 165, 0, 0.8),
        0 0 100px rgba(255, 140, 0, 0.5),
        inset -30px -30px 60px rgba(0, 0, 0, 0.3);
}

.handwritten-title { color: #ffd700; }
.opening-letter { color: #ffcccb; }
.proposal-text { color: #ffe4b5; }

.glowing-heart { 
    filter: drop-shadow(0 0 20px rgba(255, 165, 0, 0.8));
}

.yes-button {
    background: linear-gradient(135deg, #ff8c00 0%, #ff6347 100%);
}
```

---

## 💎 Theme 3: Diamond Sparkle

For a luxurious, elegant, sparkling feel.

**Replace in `styles.css`:**

```css
.proposal-wrapper {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.moon {
    background: radial-gradient(circle at 35% 35%, #ffffff, #f0f0f0);
    box-shadow: 
        0 0 80px rgba(255, 255, 255, 0.9),
        0 0 120px rgba(255, 215, 0, 0.6),
        inset -30px -30px 60px rgba(0, 0, 0, 0.3);
}

.handwritten-title { color: #e0d5c7; }
.opening-letter { color: #d4af37; }
.proposal-text { color: #f4e4c1; }

.glowing-heart { 
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.9));
}

.yes-button {
    background: linear-gradient(135deg, #d4af37 0%, #c0a000 100%);
    color: #000;
}

.starfield {
    opacity: 1; /* Brighter stars like diamonds */
}
```

---

## 🌸 Theme 4: Sakura Blossom

For a delicate, springtime, gentle feel.

**Replace in `styles.css`:**

```css
.proposal-wrapper {
    background: linear-gradient(135deg, #2d2645 0%, #3d3557 50%, #3a2e5f 100%);
}

.moon {
    background: radial-gradient(circle at 35% 35%, #fff0f5, #ffe4e1);
    box-shadow: 
        0 0 60px rgba(255, 192, 203, 0.8),
        0 0 100px rgba(255, 182, 193, 0.5),
        inset -30px -30px 60px rgba(0, 0, 0, 0.3);
}

.handwritten-title { color: #ffb6d9; }
.opening-letter { color: #ffc0cb; }
.proposal-text { color: #ffe4e1; }

.glowing-heart { 
    filter: drop-shadow(0 0 20px rgba(255, 192, 203, 0.9));
}

.yes-button {
    background: linear-gradient(135deg, #ffb6d9 0%, #ff69b4 100%);
}

/* Make floating hearts use cherry blossoms */
/* Update in script.js: */
const hearts = ['🌸', '🌺', '🌻', '💕'];
```

---

## 🔥 Theme 5: Passionate Fire

For a bold, intense, passionate feel.

**Replace in `styles.css`:**

```css
.proposal-wrapper {
    background: linear-gradient(135deg, #1a0a0a 0%, #2d1414 50%, #3a1a1a 100%);
}

.moon {
    background: radial-gradient(circle at 35% 35%, #ff4500, #ff6347);
    box-shadow: 
        0 0 60px rgba(255, 69, 0, 0.8),
        0 0 100px rgba(255, 99, 71, 0.5),
        inset -30px -30px 60px rgba(0, 0, 0, 0.3);
}

.handwritten-title { color: #ff6347; }
.opening-letter { color: #ff7f50; }
.proposal-text { color: #ffa07a; }

.glowing-heart { 
    filter: drop-shadow(0 0 20px rgba(255, 69, 0, 0.9));
}

.yes-button {
    background: linear-gradient(135deg, #ff4500 0%, #dc143c 100%);
}
```

---

## 🌊 Theme 6: Aurora Borealis

For a magical, ethereal, northern lights feel.

**Replace in `styles.css`:**

```css
.proposal-wrapper {
    background: linear-gradient(135deg, #001a33 0%, #0a3d4d 50%, #003d5c 100%);
}

.moon {
    background: radial-gradient(circle at 35% 35%, #00ff88, #00cc66);
    box-shadow: 
        0 0 60px rgba(0, 255, 136, 0.8),
        0 0 100px rgba(0, 204, 102, 0.5),
        inset -30px -30px 60px rgba(0, 0, 0, 0.3);
}

.handwritten-title { color: #00ff88; }
.opening-letter { color: #66ffcc; }
.proposal-text { color: #99ffdd; }

.glowing-heart { 
    filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.8));
}

.yes-button {
    background: linear-gradient(135deg, #00ff88 0%, #00cc66 100%);
    color: #001a33;
}
```

---

## 🎨 HOW TO APPLY A THEME

1. Open `styles.css` in your text editor
2. Find the color values listed above for your chosen theme
3. Replace the current values with the new ones
4. Save the file
5. Refresh your browser to see the changes (Ctrl+R or Cmd+R)
6. Test until it looks perfect

---

## 🌈 CUSTOM THEME BUILDER

Want to create your own unique theme?

**Step 1: Choose your main color**
Use https://color-hex.com to find hex codes

**Step 2: Generate complementary colors**
Use https://coolors.co for color palettes

**Step 3: Replace these key CSS values:**

```css
/* Background */
.proposal-wrapper {
    background: linear-gradient(135deg, YOUR_COLOR1 0%, YOUR_COLOR2 50%, YOUR_COLOR3 100%);
}

/* Moon */
.moon {
    background: radial-gradient(circle at 35% 35%, YOUR_LIGHT_COLOR, YOUR_MEDIUM_COLOR);
    box-shadow: 0 0 60px rgba(YOUR_R, YOUR_G, YOUR_B, 0.8), ...;
}

/* Primary Text */
.handwritten-title { color: YOUR_ACCENT_COLOR; }

/* Secondary Text */
.opening-letter { color: YOUR_SECONDARY_COLOR; }

/* Button */
.yes-button {
    background: linear-gradient(135deg, YOUR_BUTTON_COLOR1 0%, YOUR_BUTTON_COLOR2 100%);
}

/* Heart Glow */
.glowing-heart { 
    filter: drop-shadow(0 0 20px rgba(YOUR_R, YOUR_G, YOUR_B, 0.8));
}
```

---

## 💡 COLOR PSYCHOLOGY GUIDE

**Choose colors based on the vibe you want:**

- **Pink/Red:** Passionate, romantic, intense love
- **Purple/Lavender:** Magical, mystical, dreamy
- **Blue:** Calm, peaceful, eternal and loyal
- **Gold/Yellow:** Warm, luxurious, joyful
- **Green:** Natural, growth, new beginnings
- **Orange:** Energetic, passionate, warm
- **White/Silver:** Pure, elegant, timeless

---

## 🎬 ANIMATION SPEED ADJUSTMENTS

Want to change how fast animations happen?

**In `styles.css`, find animation durations:**

```css
/* Slow animations (dreamy feel) */
.moon { animation: moonRise 8s ease-in-out forwards; } /* Was 5s */
.opening-letter { animation: textFadeIn 1.5s ease-in-out; } /* Was 1s */

/* Fast animations (high energy) */
.moon { animation: moonRise 3s ease-in-out forwards; } /* Was 5s */
.opening-letter { animation: textFadeIn 0.5s ease-in-out; } /* Was 1s */
```

---

## 🎯 THEME SUGGESTIONS FOR DIFFERENT PERSONAS

**For her personality, try:**

- **Romantic & Dreamy** → Moonlit Romance (default) or Sakura Blossom
- **Bold & Confident** → Passionate Fire or Diamond Sparkle
- **Calm & Peaceful** → Ocean Midnight or Aurora Borealis
- **Warm & Cozy** → Sunset Romance
- **Elegant & Luxurious** → Diamond Sparkle
- **Nature Lover** → Sakura Blossom with nature sounds

---

## ✅ THEME TESTING CHECKLIST

After applying a theme:

- [ ] Background looks good
- [ ] Moon is visible against background
- [ ] Text is readable
- [ ] Heart emoji shows clearly
- [ ] Button is visible and clickable
- [ ] Colors look good on mobile too
- [ ] Tested in different browsers
- [ ] Overall vibe matches your relationship

---

## 💾 SAVING YOUR THEME

If you create a beautiful custom theme, save it!

1. Take notes of all color hex codes you used
2. Save a copy of your CSS with a new name
3. You can reuse it for other occasions!

---

Remember: The best theme is the one that feels like YOUR love story. 💕

Choose colors that resonate with both of you, and the proposal will be absolutely perfect!
