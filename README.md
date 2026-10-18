# The Explorers' Field Kit

The Phantom Peak Explorers' Club's public directory of club tools and projects made by members. This is a static GitHub Pages site in `Phantom-Peak-Explorers-Club/field-kit`.

## Add a member-made tool

1. Upload a screenshot of the tool to `assets/member/` where possible. A landscape screenshot crops best in the card; get the maker's permission before using it. Keep a copy in this repository. If there is no screenshot yet, the site displays a letter tile. Member tools use screenshots rather than illustrated posters when a screenshot is available.
2. [Edit `member-tools.json`](https://github.com/Phantom-Peak-Explorers-Club/field-kit/edit/main/member-tools.json) on GitHub. Add an object between the square brackets, separated from any existing object by a comma:

   ```json
   {
     "name": "Example Tool",
     "creator": "Explorer Name",
     "description": "One or two sentences explaining what the tool does.",
     "url": "https://example.com/tool",
     "image": "assets/member/example-tool-screenshot.webp",
     "imageAlt": "Screenshot of Example Tool"
   }
   ```

3. Commit the change. GitHub Pages will update the member shelf automatically.

`name`, `creator`, `description` and an `https://` URL are required. `image` and `imageAlt` are optional. Images must be in `assets/member/`. To remove a listing, delete its object from the JSON file. The order in the file is the order shown on the page.

The five PPEC tools are part of `index.html`; edit those cards when a club tool changes. External member tools are listed separately, with the maker named on each card.
