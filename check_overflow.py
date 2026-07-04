from playwright.sync_api import sync_playwright

pages = ["/", "/category/dog-training", "/article/trim-dog-nails-safely", "/search?q=dog"]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for path in pages:
        page = browser.new_page(viewport={"width": 375, "height": 800}, is_mobile=True, has_touch=True)
        page.goto(f"http://localhost:3300{path}")
        page.wait_for_timeout(300)
        scroll_w = page.evaluate("document.documentElement.scrollWidth")
        client_w = page.evaluate("document.documentElement.clientWidth")
        print(path, "scrollWidth:", scroll_w, "clientWidth:", client_w, "OVERFLOW" if scroll_w > client_w else "OK")
        page.close()
    browser.close()
