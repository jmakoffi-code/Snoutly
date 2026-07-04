from playwright.sync_api import sync_playwright

targets = [
    ("http://localhost:3300/", "next_home.png", 1440, 2600, False),
    ("http://localhost:3300/", "next_home_mobile.png", 390, 2000, True),
    ("http://localhost:3300/article/trim-dog-nails-safely", "next_article.png", 1440, 2200, False),
    ("http://localhost:3300/category/cat-care", "next_category.png", 1440, 1800, False),
    ("http://localhost:3300/category/gear-products", "next_empty.png", 1440, 900, False),
    ("http://localhost:3300/search?q=cat", "next_search.png", 1440, 1200, False),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for url, out, w, h, mobile in targets:
        page = browser.new_page(viewport={"width": w, "height": h}, is_mobile=mobile, has_touch=mobile)
        page.goto(url)
        page.wait_for_timeout(400)
        page.screenshot(path=out, full_page=True)
        print("saved", out)
    browser.close()
