# 🎬 Cinematic Proposal - Setup & Customization Guide

## 📂 PROJECT STRUCTURE

```
LOve v2/
├── index.html                    # Main proposal page
├── styles.css                    # All styling & animations
├── script.js                     # Interactive functionality
├── README.md                     # Complete documentation
├── SETUP_GUIDE.md               # This file
├── romantic-music.mp3           # Your love song (add this)
├── photo1.jpg                   # Your memory photos (add these)
├── photo2.jpg
└── photo3.jpg
```

## Step-by-Step SETUP

### ✅ Music & Photos: COMPLETE! ✓

**Your Music File (Ready):**
- ✓ **Narivetta - Minnalvala** by Tovino Thomas, Anuraj Manojar, Jakes Bejoy, Sid Sriram, Sithara, & Kaithapram
- ✓ Beautiful romantic song
- ✓ Now active in your proposal
- ✓ Auto-plays when she opens the link

**Your Photos (Ready):**
- ✓ **photo1.jpg.png** - In memory gallery (first position)
- ✓ **photo2.jpg.png** - In memory gallery (second position)
- ✓ **photo3.jpg.jpg** - In memory gallery (third position)
- ✓ All displaying with captions
- ✓ Beautiful animations on load

---

Open `index.html` in a text editor and update:

**Change the name (if not Gayu):**
```html
<!-- Original -->
<h2 class="handwritten-title">Dear Gayu…</h2>

<!-- Your version -->
<h2 class="handwritten-title">Dear [Her Name]…</h2>
```

**Update opening letter:**
```html
<!-- Find this section and personalize -->
<p class="opening-letter">
    I once believed love was just a word,<br>
    <span class="delay-1">until you turned it into a feeling I carry every day.</span>
    <!-- Add your own words here -->
</p>
```

**Add your photos:**
```html
<!-- Replace the photo gallery section -->
<div class="photos-container">
    <div class="photo-item">
        <img src="photo1.jpg" alt="Memory 1" class="photo-placeholder">
        <p class="photo-caption">Our first date - I knew then.</p>
    </div>
    <div class="photo-item">
        <img src="photo2.jpg" alt="Memory 2" class="photo-placeholder">
        <p class="photo-caption">The moment I realized forever.</p>
    </div>
    <div class="photo-item">
        <img src="photo3.jpg" alt="Memory 3" class="photo-placeholder">
        <p class="photo-caption">You make every moment beautiful.</p>
    </div>
</div>
```

**Customize the love letter:**
```html
<!-- Find the love-letter-modal section -->
<p>
    <em>[Her Name],</em><br><br>
    this page exists because my heart chose you.<br><br>
    Choosing you today was easy — <br>
    choosing you every day for the rest of my life<br>
    will be my greatest joy.<br><br>
    <!-- Add more personal lines here -->
    
    <strong>Forever yours,</strong><br>
    <strong>[Your Name] ❤️</strong>
</p>
```

### Step 3: Update the Music File Reference

In `index.html`, find:
```html
<audio id="proposalMusic" loop>
    <source src="romantic-music.mp3" type="audio/mpeg">
</audio>
```

If your music file has a different name, update `romantic-music.mp3` to your filename.

## 🎨 STYLING CUSTOMIZATION

### Color Scheme (Edit `styles.css`)

**Current palette (Soft Pink & Purple):**
```css
Primary Pink: #ffb6d9
Hot Pink: #ff85b8
Light Purple: #e8d5ff
Dark Background: #0a0e27
Moon: #fffacd
```

**To create a Blue theme:**
```css
.handwritten-title { color: #87ceeb; }
.opening-letter { color: #add8e6; }
.proposal-text { color: #b0e0e6; }
.yes-button { background: linear-gradient(135deg, #4169e1 0%, #1e90ff 100%); }
```

**To create a Gold theme:**
```css
.handwritten-title { color: #ffd700; }
.glowing-heart { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); }
.yes-button { background: linear-gradient(135deg, #ffa500 0%, #ff8c00 100%); }
```

### Animation Speed

**To slow down animations:**
```css
/* Find in styles.css and increase duration */
.moon { animation: moonRise 5s ease-in-out forwards; }
/* Change 5s to 8s for slower rise */
```

**To speed up animations:**
```css
/* Change durations to smaller values like 2s, 3s */
```

## 🎵 MUSIC FILE GUIDE

### Recommended Free Royalty-Free Sources:

**Best Option: YouTube Audio Library**
1. Go to youtube.com/audio_library
2. Search for "romantic piano"
3. Download high-quality audio
4. Convert to MP3 using: cloudconvert.com or audacityteam.org

**Other Free Sources:**
- **Bensound** (bensound.com) - Professional quality
- **Incompetech** (incompetech.com) - Free with attribution
- **Pixabay Music** (pixabay.com/music) - Free, no attribution needed
- **Free Music Archive** (freemusicarchive.org)

### Audio File Requirements:
- Format: MP3 (best compatibility)
- Duration: 3-5 minutes ideal
- Style: Slow, romantic, instrumental
- Volume: Will be set to 30% by default

## 📱 MOBILE TESTING

**Before deploying, test on mobile:**

1. Open the HTML file on your phone's browser
2. Check:
   - [ ] Text is readable (not too small)
   - [ ] Images display clearly
   - [ ] Buttons are easy to tap
   - [ ] Music plays (may require first tap)
   - [ ] Animations are smooth

**If text is too small on mobile:**
Edit `styles.css` media queries (around line 400):
```css
@media (max-width: 480px) {
    .handwritten-title { font-size: 1.4rem; } /* Increase if needed */
    .opening-letter { font-size: 0.85rem; }
}
```

## 🌐 DEPLOYMENT GUIDE

### Option 1: GitHub Pages (Most Recommended)

**Prerequisites:** GitHub account (free)

**Steps:**
1. Go to github.com and sign in
2. Create new repository called "gayu-proposal"
3. Click "Add file" → "Upload files"
4. Upload: index.html, styles.css, script.js, romantic-music.mp3, photos
5. Go to Settings → Pages
6. Under "Source", select "main" branch
7. Click Save
8. Wait 1-2 minutes
9. Your live link: `https://yourusername.github.io/gayu-proposal`

### Option 2: Netlify (Very User Friendly)

**Prerequisites:** Email account (no Netlify account needed initially)

**Steps:**
1. Go to netlify.com
2. Sign up (or sign in if you have account)
3. Click "New site from Git" or use drag-and-drop
4. Drag your entire project folder
5. Netlify deploys automatically
6. Share the provided URL instantly

**Live URL looks like:** `your-proposal-xxxxx.netlify.app`

### Option 3: Vercel (Fast & Simple)

**Steps:**
1. Go to vercel.com
2. Click "New Project" → "Import Git Repo"
3. Or drag and drop your project folder
4. Vercel builds and deploys instantly
5. Share the URL

**Live URL looks like:** `gayu-proposal.vercel.app`

### Option 4: Self-Hosting on Your Server

If you have your own web server:
1. Upload all files via FTP
2. Ensure folder permissions allow public access
3. Access via your domain

## 🔐 PRIVACY & SHARING

**Keep it Personal:**
- Share the unique URL only with her
- Don't post on social media before she sees it
- Consider setting up a custom domain for extra special touch
- The URL itself is the invitation

**Custom Domain (Optional):**
1. Buy domain from GoDaddy, Namecheap, etc.
2. Point to your GitHub Pages / Netlify / Vercel
3. Get URL like: `willYouMarryMe.com`

## ✅ FINAL CHECKLIST

Before sending the proposal link, verify:

- [ ] **Music File:** `romantic-music.mp3` is in the folder
- [ ] **Photos:** All 3 images are in the folder and visible
- [ ] **Personalization:** All names and messages are customized
- [ ] **Links:** All file paths in HTML/CSS are correct
- [ ] **Desktop Test:** Open index.html in browser - works perfectly
- [ ] **Mobile Test:** Opened on phone - responsive and beautiful
- [ ] **Music Test:** Audio plays (may require click on phone)
- [ ] **Button Test:** "YES, FOREVER" triggers celebration
- [ ] **Letter Test:** Love letter appears after celebration
- [ ] **Deployed:** Live URL is working correctly
- [ ] **Shared:** Only send to her (not on social media)

## 🎬 PRESENTATION TIPS

**Best Practices:**
1. Choose quiet, private moment
2. Have your phone/laptop positioned so she can see
3. Let the experience unfold without rushing
4. Be ready for the moment - have a ring/gift nearby!
5. Save her reaction (photo/video if possible)
6. Celebrate the moment together

**Timing:**
- Evening or night (starry sky is more visible)
- Her phones on silent
- No interruptions
- In a location that's meaningful to you both

## 🆘 TROUBLESHOOTING

**Music won't play:**
- Check filename matches the HTML reference
- Verify MP3 file is in same folder as index.html
- Try different browser
- On mobile, touch the page first to allow autoplay

**Images not showing:**
- Check photo filenames match HTML exactly
- Verify images are in same folder
- Try JPG format instead of PNG
- Ensure image files aren't corrupted

**Animations stuttering:**
- Close other browser tabs
- Update your browser
- Try in Chrome or Firefox
- Reduce background apps on your device

**Colors don't look right:**
- Check your monitor brightness/color settings
- Try on different device
- Update your graphics drivers
- Colors are optimized for OLED/modern screens

## 📞 NEED HELP?

**Common Issues & Solutions:**

1. **"File not found" error:**
   - All files (HTML, CSS, JS, music, photos) must be in SAME folder
   - Check spelling exactly matches

2. **Music doesn't autoplay on phone:**
   - This is normal for security. User must tap page first
   - Music will play when she opens the link

3. **Can't remember where I uploaded it:**
   - GitHub: github.com/yourusername/gayu-proposal/settings
   - Netlify: app.netlify.com → Site settings
   - Vercel: vercel.com → Project settings

4. **Want to make changes after deploying:**
   - Edit files locally
   - Upload updated versions
   - Clear browser cache (Ctrl+Shift+Delete)
   - Changes appear in 1-2 minutes

## 💝 FINAL THOUGHTS

This experience is designed to make the proposal moment unforgettable. The combination of:
- Stunning cinematic visuals
- Beautiful music
- Personal, heartfelt words
- Interactive celebration

...creates a moment she'll treasure forever.

Remember: The proposal is special because of YOUR love, not because of the technology. This is just the medium to express what's in your heart.

Best of luck. May she say YES! ❤️💍

---

**Questions while customizing?** Re-read the relevant section or test changes locally before deploying publicly. Every change can be tested immediately by opening index.html in your browser.
