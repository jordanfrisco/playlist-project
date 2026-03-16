
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./slide-arrow.js";
import "./slide-indicator.js";

/**
 * `playlist-project`
 * 
 * @demo index.html
 * @element playlist-project
 */


export class PlaylistProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "playlist-project";
  }

  constructor() {
    super();
    this.title = "";
    this.currentIndex = 0;
    this.t = {
      title: "Title",
    };
    this.slides = Array.from(this.querySelectorAll("playlist-slide"));
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentIndex: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--playlist-project-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}:</span> ${this.title}</h3>
  <slide-arrow
    .index="${this.currentIndex}"
    .total="${this.slides ? this.slides.length : 0}"
    @prev-clicked="${this.prev}"
    @next-clicked="${this.next}">
  </slide-arrow>
  <slot></slot>
  <slide-indicator
    @playlist-index-changed="${this.handleEvent}"
    .total="${this.slides ? this.slides.length : 0}"
    .currentIndex="${this.currentIndex}">
  </slide-indicator>
</div>`;
  }

  handleEvent(e) {
    this.currentIndex = e.detail.index;
    this._updateSlides();
  }

next() {
  if (this.currentIndex < this.slides.length - 1) {
    this.currentIndex++;
    this._updateSlides();
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this._updateSlides();
  }
}

firstUpdated() {
  this._updateSlides();
}

_updateSlides() {
  this.slides.forEach((slide, i) => {
    slide.style.display = i === this.currentIndex ? "block" : "none";
  });

}

}

globalThis.customElements.define(PlaylistProject.tag, PlaylistProject); 

