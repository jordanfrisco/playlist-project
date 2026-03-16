
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `playlist-project`
 * 
 * @demo index.html
 * @element playlist-project
 */


export class SlideArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "slide-arrow";
  }

  constructor() {
    super();
    this.index = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index : { type: Number },
      total : { type: Number },
    };
  }

  //  Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-2);
      }
      button {
        background-color: var(--ddd-theme-default-beaverBlue);
        color: white;
        border: none;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
        cursor: pointer;
        font-size: var(--ddd-font-size-s);
      }
      button:hover {
        opacity: 0.8;
      }
      button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    `];
  } 

  




render() {
  return html`
    <div class="slide">

      <div class="top-heading">
        ${this.topHeading}
      </div>

      <h1 class="main-heading">
        ${this.secondHeading}
      </h1>

      <div class="divider"></div>

      <div class="content">
        <slot></slot>
      </div>

    <div class="wrapper">
        <button class="prev" 
        ?disabled="${this.index === 0}"
        @click=${() => this.dispatchEvent(new CustomEvent('prev-clicked', {bubbles: true, composed: true }))}><</button>
        <button class="next" 
        ?disabled="${this.index === this.total - 1}"
        @click=${() => this.dispatchEvent(new CustomEvent('next-clicked', {bubbles: true, composed: true}))}>></button>
    </div>
    </div>
  `;
}

}

globalThis.customElements.define(SlideArrow.tag, SlideArrow); 
