# Website for Seyi Olojo

A static site built using Hugo, Tailwind, and the Catppuccin Latte theme.

## Installing Hugo

https://gohugo.io/installation/

## Creating New Posts

The project is structured such that all new posts are created in the `content/` directory.
(There are a few examples such as `content/publication/2021/the-distressing-ads-that-persist.md`)
To create a new publication post, run the following command *in the root directory* of the project
changing the year and name.

`hugo new publication/2022/name.md`

The year is added to avoid conflicting files.

This will create a new markdown file with yaml at the top. 

* The title is the title of the post. (This can be different from the file name.)
* The date is the current date. It is usually best to take off the time stamp. (`date: 2021-05-01`)
* The draft boolean determines if the file is built into the static site or skipped.
* The description is what is displayed under the title and date on the card.
* The list of categories will appear to the right of the date on the card.
* The list of tags is currently unused, but could be used in the future.

Beneath that, write any markdown for the page.

## Changing the Theme

The HTML is determined by the theme. 
Every page is created using the `themes/catppuccin-latte/layouts/_default/baseof.html` file and one of the following:

The file `themes/catppuccin-latte/layouts/index.html` is the 
about/home page of the site, but the text on that page is determined by `content/_index.md`.
(Side note, the image used on the page is in `themes/catppuccin-latte/static/images/seyi.jpg`. I don't think this
is how Hugo intends for images to be used, but whatever.)

Likewise, `themes/catppuccin-latte/layouts/_default/list.html` is what `content/project/_index.md`
and `content/publication/_index.md` are rendered inside of.

`themes/catppuccin-latte/layouts/_default/single.html` is what the blog post files such as `content/publication/2022/name.md`
are rendered inside of.

## Notes

As mentioned earlier, this project uses Tailwindcss. The input file for that is `themes/catppuccin-latte/static/css/tailwind-input.css`
The `run.sh` file in the root directory will build the css and run `hugo server`.

