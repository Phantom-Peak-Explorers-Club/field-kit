const grid = document.querySelector('#member-grid');
const empty = document.querySelector('#member-empty');

function validWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

function validImagePath(value) {
  if (typeof value !== 'string' || !/^assets\/member\/[a-zA-Z0-9._/-]+$/.test(value) || value.includes('..')) return null;
  return value;
}

function make(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderMemberTool(tool, index) {
  if (!tool || typeof tool !== 'object') return null;
  const name = String(tool.name || '').trim();
  const creator = String(tool.creator || '').trim();
  const description = String(tool.description || '').trim();
  const url = validWebUrl(tool.url);
  if (!name || !creator || !description || !url) return null;

  const article = make('article', 'tool-card member-card');
  const art = make('div', 'tool-art art-member');
  const imagePath = validImagePath(tool.image);
  if (imagePath) {
    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = String(tool.imageAlt || 'Screenshot of ' + name);
    image.loading = 'lazy';
    art.append(image);
  } else {
    art.append(make('span', 'member-monogram', name.slice(0, 1).toUpperCase()));
  }
  article.append(art);

  const copy = make('div', 'tool-copy');
  const meta = make('div', 'card-meta');
  meta.append(make('span', '', `M${String(index + 1).padStart(2, '0')} / MEMBER TOOL`));
  meta.append(make('span', '', creator));
  copy.append(meta, make('h3', '', name), make('p', '', description));
  const link = make('a', 'tool-link', 'Visit tool ');
  link.href = url;
  link.append(make('span', '', '↗'));
  link.lastElementChild.setAttribute('aria-hidden', 'true');
  copy.append(link);
  article.append(copy);
  return article;
}

fetch('member-tools.json', { cache: 'no-store' })
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(tools => {
    if (!Array.isArray(tools)) throw new Error('Member tools must be a list');
    const cards = tools.map(renderMemberTool).filter(Boolean);
    grid.replaceChildren(...cards);
    empty.hidden = cards.length > 0;
  })
  .catch(() => {
    empty.querySelector('p:last-child').textContent = 'Member tools could not be loaded. Please try again shortly.';
  });
