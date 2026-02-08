# 🆘 TROUBLESHOOTING & FAQ

## 🎵 AUDIO & MUSIC ISSUES

### Problem: Music won't play at all

**Cause:** File not found or not in the correct location

**Solutions:**
1. **Check file location:**
   - Verify `romantic-music.mp3` is in the SAME folder as `index.html`
   - On Windows, files should be: `C:\Users\snith\Desktop\LOve v2\romantic-music.mp3`

2. **Check filename:**
   - Exact match required: `romantic-music.mp3` (case sensitive on some servers)
   - If your file is named differently, update the HTML:
     ```html
     <source src="your-filename.mp3" type="audio/mpeg">
     ```

3. **Check file format:**
   - Only MP3 works reliably in HTML5
   - Convert your file to MP3 if it's WAV, M4A, or other format
   - Use: audacityteam.org or cloudconvert.com for free conversion

4. **Test in different browser:**
   - Try Chrome, Firefox, or Edge
   - Some browsers have different audio support

### Problem: Music plays on desktop but not on mobile

**Cause:** Browser security - mobile browsers require user interaction for audio

**Solution:** This is NORMAL behavior
- Music will start when she taps/clicks the page
- Add gentle instruction text if needed
- The experience still works beautifully without autoplay

### Problem: Music is too loud or too quiet

**Location:** In `script.js`, find:
```javascript
music.volume = 0.3; // This is the volume level
```

**Adjust:**
- `0.1` = Very quiet
- `0.3` = Soft (current/recommended)
- `0.5` = Medium
- `1.0` = Full volume

---

## 📸 IMAGE & PHOTO ISSUES

### Problem: Photos won't display

**Check 1: File location**
- Photos should be in SAME folder as `index.html`
- Correct path: `C:\Users\snith\Desktop\LOve v2\photo1.jpg`

**Check 2: Filename matching**
In `index.html`, verify:
```html
<img src="photo1.jpg" ...> <!-- Exact filename -->
```
If your photo is named `IMG_001.jpg`, change the HTML to match.

**Check 3: File format**
- Use: JPG, PNG, or WebP
- Avoid: BMP, TIFF, GIF (have issues in some browsers)
- Convert with: tinypng.com (free)

**Check 4: File corruption**
- Try opening the image file directly in your browser
- If it shows, the file is fine
- If error, the file is corrupted - use a different photo

### Problem: Photos look blurry or stretched

**Solution: Image size optimization**
- Ideal size: 600x600px to 1200x1200px
- Resize at: tinypng.com or online image resizer
- Check aspect ratio: Should be square (1:1) for best results

**In HTML, add image dimensions:**
```html
<img src="photo1.jpg" alt="Memory" class="photo-placeholder" width="600" height="600">
```

### Problem: Can't get photos from my gallery to the folder

**Windows Solution:**
1. Open File Explorer
2. Navigate to `C:\Users\snith\Desktop\LOve v2`
3. Right-click → Paste your photos here
4. Rename them to: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`

**Mac Solution:**
1. Open Finder
2. Drag and drop photos onto the Love v2 folder
3. Rename in Finder

---

## 📱 RESPONSIVE & DISPLAY ISSUES

### Problem: Text is too small on mobile

**Solution: Edit the CSS media queries**

In `styles.css`, find (around line 400):
```css
@media (max-width: 480px) {
    .handwritten-title { font-size: 1.4rem; } /* Increase value */
    .opening-letter { font-size: 0.85rem; } /* Increase value */
    .proposal-text { font-size: 0.9rem; } /* Increase value */
}
```

**Make text bigger:**
- Change `0.85rem` to `1rem`
- Change `1.4rem` to `1.8rem`
- Test on your phone after changes

### Problem: Buttons overlap on small screens

**Solution: Adjust button container in CSS**
```css
.button-container {
    flex-direction: column; /* Stack buttons vertically */
    width: 90%;
    gap: 15px;
}

.yes-button {
    width: 100%; /* Full width button */
}
```

### Problem: Content is cut off on the sides

**Solution: Check viewport in HTML**
Verify in `index.html` (should already be there):
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

If missing, add it to the `<head>` section.

### Problem: Animations are stuttering/lagging

**Causes & Solutions:**
1. **Too many tabs open** → Close other browser tabs
2. **Old device** → This is expected on very old phones
3. **Slow internet** → Not an issue, animations run locally
4. **Graphics drivers outdated** → Update your device drivers
5. **Low device RAM** → Close background apps

**Performance optimization:**
In `styles.css`, reduce animation complexity:
```css
/* Replace smooth animations with faster ones */
animation: fadeIn 0.5s linear; /* Faster and simpler */
```

---

## 🌐 DEPLOYMENT & LINK ISSUES

### Problem: "File not found" error when accessing via URL

**For GitHub Pages:**
1. Go to github.com/yourusername/gayu-proposal/settings
2. Check "Pages" section shows "Deployed from main"
3. Wait 2-3 minutes for deployment (first time)
4. Clear browser cache (Ctrl+Shift+Delete)
5. Try different browser

**For Netlify:**
1. Log in to app.netlify.com
2. Click the site → Deploys tab
3. Look for green "Published" status
4. If red "Failed", re-drag files or check file names

**For Vercel:**
1. Go to vercel.com/dashboard
2. Click project → Deployments tab
3. Should show "Ready" status
4. If error, rebuild by clicking "Redeploy"

### Problem: Old version of site is loading (cached)

**Solutions:**
1. **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear cache:** 
   - Chrome: Settings → Clear browsing data → Clear all
   - Firefox: Edit → Preferences → Privacy → Clear Data
3. **Incognito/Private mode:** Test in private browser window

### Problem: Link doesn't work on her phone but works on your desktop

**Check:**
1. Different network? Try both WiFi and mobile data
2. Wrong browser? Try Chrome instead of Safari
3. Is the phone browser updated? Update to latest version
4. Is she using the exact URL you sent?

**Debug:**
- Text URL instead of link (avoid link shorteners)
- Make sure no extra spaces in URL
- Send full path: `https://yourusername.github.io/gayu-proposal` (not just the domain)

---

## 🎨 STYLING & APPEARANCE ISSUES

### Problem: Colors don't match your intention

**Cause:** Monitor color calibration or browser default colors

**Solutions:**
1. **Test on different device** - Colors vary by screen
2. **Adjust in CSS:**
   ```css
   .handwritten-title { color: #ffb6d9; } /* Change hex code */
   ```
3. **Use color picker:**
   - Go to colorhexa.com
   - Search for color you want (e.g., "light pink")
   - Copy hex code
   - Paste in CSS

### Problem: Background gradient looks weird

**Cause:** Wrong gradient syntax or browser incompatibility

**In `styles.css`, verify:**
```css
.proposal-wrapper {
    background: linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f0f2e 100%);
}
```

**If still wrong, use simpler gradient:**
```css
background: linear-gradient(to bottom right, #0a0e27, #1a1a3e);
```

### Problem: Moon doesn't glow

**Check the box-shadow:**
```css
.moon {
    box-shadow: 
        0 0 60px rgba(255, 250, 205, 0.8),
        0 0 100px rgba(255, 250, 205, 0.5),
        inset -30px -30px 60px rgba(0, 0, 0, 0.3);
}
```

If glow is missing, increase the pixel values:
```css
box-shadow: 0 0 100px rgba(255, 250, 205, 1); /* Bigger glow */
```

---

## ✍️ TEXT & CONTENT ISSUES

### Problem: Special characters (emoji, accents) don't display correctly

**Solution 1: Check HTML encoding**
At the top of `index.html`, verify:
```html
<meta charset="UTF-8">
```

**Solution 2: For accented characters:**
In HTML, use character codes:
- é = `&eacute;`
- ñ = `&ntilde;`
- ü = `&uuml;`

**Solution 3: For emojis:**
They should work fine. If not, copy-paste directly from emoji picker:
- emojipedia.org
- getemoji.com
- Mac: Cmd+Ctrl+Space
- Windows: Windows+; (semicolon)

### Problem: Text is cut off or overflowing

**In `styles.css`, adjust:**
```css
.handwritten-title {
    font-size: 2.5rem; /* Make smaller */
    word-wrap: break-word; /* Add this */
    white-space: normal; /* Ensure text wraps */
}
```

### Problem: Font doesn't look right

**Georgia is the default. To change:**
In `styles.css`:
```css
body {
    font-family: 'Arial', sans-serif; /* Change font family */
}
```

**Good font alternatives:**
- Serif: Georgia, Garamond, Times
- Sans-serif: Arial, Helvetica, Verdana
- Cursive: Use 'Lucida Handwriting' (already in use)

---

## 🎯 BUTTON & INTERACTION ISSUES

### Problem: YES button doesn't work

**Check 1: JavaScript is enabled**
- Most browsers have JS enabled by default
- Try a different browser to confirm

**Check 2: Verify button ID in HTML**
```html
<button class="yes-button" id="yesBtn">
    🌹 YES, FOREVER ❤️
</button>
```

**Check 3: Check JavaScript file loaded**
Open browser console (F12) and look for errors

### Problem: Love letter doesn't appear after clicking YES

**Check the modal CSS:**
In `styles.css`:
```css
.love-letter-modal.show {
    display: flex;
}
```

Verify the class is being added. If still not working:

**In the CSS, add this to make it visible:**
```css
.love-letter-modal {
    display: flex !important; /* Force display */
}
```

### Problem: Rose petals appear but don't fall smoothly

**In `styles.css`, modify animation:**
```css
@keyframes petalFall {
    to {
        opacity: 0;
        transform: translateY(100vh) rotate(360deg);
    }
}
```

**For smoother fall, make the rotation slower:**
```css
transform: translateY(100vh) rotate(180deg); /* Less rotation */
```

---

## 💾 FILE & FOLDER ISSUES

### Problem: Can't find where I saved the files

**Windows:**
1. Open Start menu
2. Type: `LOve v2`
3. Click the folder when it appears
4. That's your project folder

**Or manually:**
1. Open File Explorer
2. Navigate to: `C:\Users\snith\Desktop\LOve v2`

### Problem: Lost my custom music file

**Recovery:**
1. Check: Do you still have the original music file?
2. If yes, just re-add it to the folder and re-verify the HTML reference
3. If no, download it again from YouTube/music site

### Problem: Accidentally deleted the HTML file

**Don't worry! Options:**
1. **Restore from this folder:** You have the code in this guide
2. **Use GitHub:** If you already uploaded, you can re-download the files
3. **Re-create:** Copy the HTML code from the README or original project

---

## 🔒 PRIVACY & SECURITY ISSUES

### Problem: Don't want the link publicly accessible

**Solutions:**
1. **Use GitHub private repository** (free)
   - Create private repo
   - Share only with her via link
   - GitHub gives private link access

2. **Password protect on Netlify:**
   - In Netlify settings
   - Add password for site
   - Only she needs the password

3. **Use unique URL:**
   - Deploy to custom domain
   - Use unguessable URL like `will-you-marry-me-gayu-xyz.com`
   - Very unlikely anyone finds it by chance

### Problem: Accidentally shared to wrong people

**Don't worry!**
1. It's just text and images - no sensitive data
2. Delete the URL from your sharing history
3. You can always re-deploy with same or different link
4. It's okay if people see it (still special between you two)

---

## 🤷 GENERAL QUESTIONS

### Q: Do I need to change anything in JavaScript?

A: **No!** The script works as-is. Only change if you're advanced with coding.

### Q: Can I test it without uploading to the internet?

A: **Yes!** Just open `index.html` in your browser locally (Ctrl+O or File → Open)

### Q: What if I make mistakes in the HTML?

A: **It's forgiving!**
- If text is wrong, reload and fix the HTML
- If a tag is broken, the page might look off but usually still works
- Save changes and refresh (Ctrl+R)

### Q: Can I use this for other occasions?

A: **Absolutely!**
- Birthday → Change theme colors
- Anniversary → Update memories
- Engagement party → Add different text
- It's fully reusable!

### Q: How long until she can see it after I deploy?

A: 
- GitHub Pages: 1-3 minutes
- Netlify: Instantly
- Vercel: Instantly (sometimes 30 seconds)

### Q: Will it work 10 years from now?

A: **Most likely!**
- HTML5 is the web standard
- As long as browsers exist, this will work
- Store the files as backup
- The web isn't going anywhere

---

## 📞 STILL STUCK?

1. **Re-read the error:** The error message usually explains what's wrong
2. **Google the error:** Copy the exact error and search
3. **Check file names:** Case matters on some servers (photo1.jpg vs Photo1.jpg)
4. **Try a different browser:** Sometimes it's browser-specific
5. **Clear cache:** Ctrl+Shift+Delete (all browsers)
6. **Restart:** Sometimes the simplest solution works!

---

## 📝 KNOWN LIMITATIONS

✅ **Works perfectly with:**
- Chrome, Firefox, Safari, Edge (all modern versions)
- iOS (iPhone), Android phones
- Windows, Mac, Linux
- Desktop, tablet, mobile
- MP3, JPG, PNG images

⚠️ **May have issues with:**
- Very old phones (iPhone 5 and older)
- Very old browsers (Internet Explorer)
- Connection-dependent features (first load audio)

---

**Everything should work smoothly! If you follow the guides, you'll be set for the most beautiful proposal.** 💕

Good luck! You've got this! 💍✨
