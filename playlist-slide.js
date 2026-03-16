/** 
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PlaylistSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "playlist-slide";
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      ...super.properties,
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
    `];
  }

  render() {
    return html`
      <div class="slide">
        <slot></slot>
      </div>`;
  }

}

globalThis.customElements.define(PlaylistSlide.tag, PlaylistSlide); 

div::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar
}

div::-webkit-scrollbar-track {
  background: orange;       
}

div::-webkit-scrollbar-thumb {
  background-color: blue;   
  border-radius: 20px;      
  border: 3px solid orange;   
}  

import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PlaylistSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "playlist-slide";
  }

  constructor() {
    super();
    this.topHeading = "";
    this.secondHeading = "";
    this.active = false;
  }

  static get properties() {
    return {
      ...super.properties,
      active: { type: Boolean, reflect: true },
      topHeading: { type: String, attribute: "top-heading" },
      secondHeading: { type: String, attribute: "second-heading" }
    };
  }

  static get styles() {
  return [
    super.styles,
    css`
      :host {
        display: block;
        padding: 40px;
      }

      .top-heading {
        font-size: 14px;
        font-weight: 700;
        color: #1a73b8;
        text-transform: uppercase;
      }

      .second-heading {
        font-size: 60px;
        font-weight: 800;
        color: #2c4a86;
        margin: 10px 0 20px 0;
      }

      .divider {
        width: 80px;
        height: 3px;
        background: #1a73b8;
        margin-bottom: 20px;
      }

      .content {
        max-width: 500px;
        line-height: 1.6;
      }
    `
  ];
}
  

  render() {
  return html`
    <div class="slide">

      <div class="top-heading">
        ${this.topHeading}
      </div>

      <div class="second-heading">
        ${this.secondHeading}
      </div>

      <div class="divider"></div>

      <div class="content">
        <slot></slot>
      </div>

    </div>
  `;
  }
}

globalThis.customElements.define(PlaylistSlide.tag, PlaylistSlide); */


import { LitElement, html, css } from "lit";

export class PlaylistSlide extends LitElement {

  static properties = {
    topHeading: { type: String, attribute: "top-heading" },
    secondHeading: { type: String, attribute: "second-heading" },
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host {
      display: block;
      padding: 60px 80px;
      background: #e8edf2;
    }

    .container {
      max-width: 1100px;
    }

    .top-heading {
      color: #1f6fb2;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .main-heading {
      font-size: 64px;
      font-weight: 800;
      color: #2b4b84;
      margin: 0 0 20px 0;
    }

    .divider {
      width: 80px;
      height: 3px;
      background: #1f6fb2;
      margin-bottom: 20px;
    }

    .content {
      max-width: 520px;
      font-size: 16px;
      line-height: 1.6;
      color: #2b2b2b;
    }
  `;

  render() {
    return html`

      <div class="container">

        <div class="top-heading">
          ${this.topHeading}
        </div>

        <div class="main-heading">
          ${this.secondHeading}
        </div>

        <div class="divider"></div>

        <div class="content">
          <slot></slot>
        </div>

      </div>

    `;
  }
}

customElements.define("playlist-slide", PlaylistSlide);

