# saver

A dummy [Jekyll](https://jekyllrb.com/) site with a placeholder landing page.

## Structure

- `docs/_config.yml` — site settings
- `docs/index.md` — landing page (uses the `home` layout, content is dummy copy)
- `docs/about.md` — placeholder secondary page at `/about/`
- `docs/_layouts/` — `default.html` shell and `home.html` hero/feature layout
- `docs/assets/css/style.css` — site styles

## Run locally

Requires Ruby and Bundler (not currently installed on this machine).

```powershell
cd docs
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
