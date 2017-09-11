var footerPreview = createClass({
  render: function() {
    var entry = this.props.entry;

    var entryCopyright = entry.getIn(['data', 'copyright']);
    var entryFacebook = entry.getIn(['data', 'social', 'facebook']);
    var entryInstagram = entry.getIn(['data', 'social', 'instagram']);
    var entryTwitter = entry.getIn(['data', 'social', 'twitter']);

    return h(
      "div",
      { id: "cmsPreview" },
      h(
        "svg",
        { className: "svg-default" },
        h(
          "defs",
          null,
          // main logo
          h(
            "symbol",
            { id: "logo-main", viewBox: "0 0 63.7 72.4" },
            h(
              "path", { d: "M3,10.5c0,0,3.3-2.5,4.3-3.3C7.6,7,7.8,6.7,8.1,6.5c-0.1,0.4-0.2,0.7-0.3,1c-0.8,3.4-2,6.7-3,10.1 c-0.3,0.8-0.5,1.7-0.7,2.5c-0.4,1.7,2.2,2.5,2.7,0.7c0.2-0.7,0.4-1.4,0.6-2c1.3-4,4.7-11.5,6.3-11.4s0,2.8-0.5,4.1 c-1,2.9-2.2,5.7-3.3,8.6c-0.7,1.7,2.1,2.4,2.7,0.7c0.5-1.2,0.9-2.4,1.3-3.5c0.2-0.7,0.5-1.3,0.7-1.9c0.8-2.1,1.7-4.1,2.9-5.9 c0.6-0.8,1.9-3,3.1-2.6c1.1,0.4-2.1,6-2.7,7.2c-1.1,2.2-2.8,5.6-0.4,7.4c1.3,0.9,3.4,0.1,4.6-0.7c1.2-0.8,2.3-1.8,3.4-2.8 c0.7,1.9,2.2,3.6,4.3,3.7c2.5,0.1,4.6-1.2,6.1-3c0.1,0.7,0.3,1.2,0.7,1.7c1.4,2.5,5.6,0.7,7.1-1.2c1.4-1.9,4-7.4,5.2-10.6 c0.1,0,0.4,0,0.5,0c0.6,0.1,1.2,0.1,1.8,0.1c-0.4,0.4-0.7,0.9-1.1,1.4c-1.6,2.2-3.5,5.7-2.8,8.6c0.7,2.7,3.3,3.8,5.9,3 c1.4-0.4,2.1-1.2,3.3-1.9c1.7-1,3.5-2,5.4-2.7c1.6-0.6,0.9-3.2-0.7-2.5c-2.5,0.9-4.8,2.2-6.9,3.5c-0.9,0.6-1.2,0.9-2.4,0.9 c-1.4,0.1-2-1.4-1.9-2.4c0.4-2.6,2-4.8,3.7-6.8c0.7-0.7,1.3-1.4,2.1-1.9c1.8-0.9,3.3-2,3.5-3.4c-0.1-0.8-0.7-1.3-1.5-1 c-1.7,0.6-4.3,2-6.1,2c-1.4,0.1-3,0-3.6-1.1c-0.6-1.1,0-2,0.4-2.6c0.2-0.4,0.8-1.3-0.6-0.8c-1.4,0.6-2.5,1.3-2.8,3.1 c-0.3,1.7,0.7,3,1.7,3.5c0.4,0.2-2.2,6.2-3.5,8c-1.3,1.8-2.2,2.6-3.4,2.9c-0.5,0.1-1.1-0.7-1.2-1c-0.3-1.5,0.1-2.7,0.5-4.1 c0.7-3,2-6.1,3.9-8.8c0.9-1.4-2-1.5-3-0.2c-0.5,0.7,0,0-0.4,0.7c-2.7-2-5.8-2.2-8.7-0.4c-3,1.9-5.1,5.6-5.6,9.2c0,0.2,0,0.5-0.1,0.7 c-0.4,1.3-3.3,3-5.1,4c-0.2,0.1-0.7,0.4-0.9-0.1c-0.1-0.4,0.4-1.4,0.7-2.2c1-2.2,2.2-4.3,3.3-6.5c0.7-1.7,1.3-3.5,0.4-5.2 c-0.8-1.4-2.7-1.5-4-0.9c-0.9,0.4-1.7,1.1-2.5,1.8c-0.3-1.1-0.9-2-2.5-1.8C13.2,4,12,4.9,11,6.2c0-0.4,0-0.7,0-1 c-0.1-1.5-1.3-2.4-2.8-2c-1.1,0.3-2,1.3-2.8,2c-1.2,1-2.5,2-3.8,2.9C0,9.1,1.3,11.3,3,10.5z M29.3,11.5c1.3-2.7,4.3-5.6,7.4-4.4 c0.1,0.1,0.9,0.5,0.9,1c0.1,0.5-1.5,4.4-2,5.4c-0.4,1.1-0.8,1.9-2.5,3.5c-1.7,1.7-3.9,1.2-4.6-0.9C28.2,14.6,28.7,12.8,29.3,11.5z M45.1,21.7c-0.7,0-3.1,3.4-6.1,3.4c-1.8,0-3-2-3.7-2c-0.7,0-3.1,2-5.3,2s-4.1-1.6-4.9-1.5c-1.7,0.1-4,1.5-5.3,1.5 c-2.5,0-3.5-1.6-5.6-1.6c-2.1,0-3.6,1.6-5.2,1.6s-5.1,0-5.1,0c-1.1,0-2,0.9-2,2v22.9c0,1.1,0.9,2,2,2h56c1.1,0,2-0.9,2-2V27.1 c0-1.1-0.9-2-2-2h-2c0,0-4.6,0-6.6,0C47,25.1,45.8,21.7,45.1,21.7z M21.7,31c0,0.1,0,1.4-0.4,1.9L10.2,45.5h10.5c0.6,0,1,0.4,1,0.9 v1.7c0,0.5-0.4,0.9-1,0.9H6.8c-0.6,0-1-0.4-1-0.9v-1.7c0-0.1,0-1.4,0.4-1.8L17.3,32H6.8c-0.6,0-1-0.4-1-0.9v-1.7 c0-0.5,0.4-0.9,1-0.9h14c0.6,0,1,0.4,1,0.9V31z M39.7,31c0,0.5-0.4,0.9-1,0.9H27.3v5h5.1c0.6,0,1,0.4,1,0.9v1.7c0,0.5-0.4,0.9-1,0.9 h-5.1v5h11.4c0.6,0,1,0.4,1,0.9v1.7c0,0.5-0.4,0.9-1,0.9H24.8c-0.6,0-1-0.4-1-0.9V29.3c0-0.5,0.4-0.9,1-0.9h14c0.6,0,1,0.4,1,0.9V31 z M58,29.3V31c0,0.5-0.4,0.9-1,0.9H45.6v5h5.1c0.6,0,1,0.4,1,0.9v1.7c0,0.5-0.4,0.9-1,0.9h-5.1v5h11.4c0.6,0,1,0.4,1,0.9V48 c0,0.5-0.4,0.9-1,0.9H43c-0.6,0-1-0.4-1-0.9V29.2c0-0.5,0.4-0.9,1-0.9h14C57.5,28.4,58,28.8,58,29.3z M48.5,56 c2.8-0.9,5.9,0.7,8.7,0.6c1.2,0,1.2-1.8,0-1.8c-2.9,0.1-5.6-1.1-8.6-0.7c-3.1,0.4-4.4,4-2.2,6.3c1.2,1.2,2.8,1.7,4.4,2.5 c1.1,0.4,2.2,1,2.3,2.2c0.1,1.2-0.9,2.1-2,2.7c-1.6,0.9-3.5,1.3-5.6,1.4c0.4-0.5,0.7-1.1,0.7-1.7c0.3-3.4-2.8-4.5-5.9-5.1 c1.4-1.2,2.2-3,1.3-5c-1.2-2.5-4.6-3.4-7.4-3.3c-3.3,0.2-3.4,3.1-3,5.5c0.3,2.1,0.4,4.3-0.1,6.4c-0.2,1-0.5,2-1.2,2.8 c-0.8,0.9-2.7,0.8-3.1-0.4c-0.4-1.2,0-2.7,0.1-3.9c0.2-2,0.1-3.9-0.4-5.8c-0.9-3.1-4-5.1-7.4-3.9s-2.9,4.6-3,7.4 c-0.1,2.1-0.6,4.7-2.5,6.1c-2,1.4-4.5,0.1-5.2-1.9c-1-2.2-1.2-4.7-0.6-7.3c0.4-1.6,0.8-3,1.2-4c0.4-1.1-1.4-1.5-1.9-0.5 C6.8,55.7,6.3,57,6,58.5c-0.4,2-0.5,3.5-0.3,5.4c0.4,2.8,1.3,5.5,4.3,6.6c3.3,1.2,5.9-1.4,7-4c0.8-2,0.6-3.7,0.9-4.6 c0.1-0.4,6.1-2.8,6.5-2.7c0.4,0.1,0.7,3.8,0.5,5.5C24.8,67,24,69.9,27.1,71c5.5,1.9,6.3-5.8,6.1-9c0-0.9-0.1-1.8-0.3-2.7 c-0.2-1.5-0.5-3.3,1.6-3.4c1.5-0.1,3.3,0.4,4.5,1.2c2.1,1.7,0.4,4.4-2,4.7c-1,0.1-1.4,1.6-0.3,1.7c2.4,0.4,6.1,0.2,7.2,2.8 c0.7,1.7-1.2,2.6-3.1,2.9c-1,0-2-0.1-2.9-0.1c-1.2-0.1-1.2,1.4-0.3,1.7c1,0.3,2.4,0.2,3.7,0.1c3.1-0.2,6.3-0.2,9.2-1.2 c1.6-0.6,3.3-1.6,3.8-3.2c0.7-1.7,0.1-3.5-1.3-4.5c-1.4-1-3.3-1.4-4.8-2.3C46.8,58.9,46.5,56.6,48.5,56z M18,59.8 c-0.4-0.2,0.1-2.2,1.4-3.1c1.9-1.2,4.1,0.2,4.2,0.9C23.7,57.7,18.3,59.9,18,59.8z" }
            )
          ),
          h(
            "symbol",
            { id: "search-icon", viewbox: "0 0 20 20" },
            h("path", { d: "M14.3,12.6h-0.9l-0.3-0.3c1.1-1.3,1.8-3,1.8-4.8c0-4.1-3.3-7.4-7.4-7.4S0,3.3,0,7.4s3.3,7.4,7.4,7.4 c1.8,0,3.5-0.7,4.8-1.8l0.3,0.3v0.9l5.7,5.7l1.7-1.7L14.3,12.6z M7.4,12.6c-2.8,0-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1s5.1,2.3,5.1,5.1 S10.3,12.6,7.4,12.6z" })
          ),
          h(
            "symbol",
            { id: "quotes-icon", viewbox: "0 0 35.2 24.7" },
            h("path", { d: "M12.8,10.4c2.2,1.5,3.2,3.8,3.2,6.3c0,4.7-3.4,8-8.1,8c-4.3,0-8-2.8-8-8c0-2.4,0.9-4.5,2.1-6.4L9.2,0h8\nL12.8,10.4z M30.8,10.4c2.2,1.5,3.2,3.8,3.2,6.3c0,4.7-3.4,8-8.1,8c-4.3,0-8-2.8-8-8c0-2.4,0.9-4.5,2.1-6.4L27.2,0h8L30.8,10.4z" })
          ),
          h(
            "symbol",
            { id: "facebook-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M18.6,10.4h-2.3c-0.3,0-0.6,0.4-0.6,0.8v1.6      h2.8l-0.4,2.3h-2.4v7h-2.7v-7h-2.4v-2.3h2.4v-1.4c0-2,1.4-3.6,3.2-3.6h2.3V10.4z" })
          ),
          h(
            "symbol",
            { id: "twitter-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M21.1,12.3c0,0.1,0,0.3,0,0.4      c0,3.9-3,8.4-8.4,8.4c-1.7,0-3.2-0.5-4.5-1.3c0.2,0,0.5,0,0.7,0c1.4,0,2.7-0.5,3.7-1.3c-1.3,0-2.4-0.9-2.8-2c0.2,0,0.4,0.1,0.6,0.1      c0.3,0,0.5,0,0.8-0.1c-1.4-0.3-2.4-1.5-2.4-2.9v0c0.4,0.2,0.9,0.4,1.3,0.4c-0.8-0.5-1.3-1.4-1.3-2.5c0-0.5,0.1-1.1,0.4-1.5      c1.5,1.8,3.6,3,6.1,3.1c-0.1-0.2-0.1-0.4-0.1-0.7c0-1.6,1.3-3,3-3c0.8,0,1.6,0.4,2.2,0.9c0.7-0.1,1.3-0.4,1.9-0.7      c-0.2,0.7-0.7,1.3-1.3,1.6c0.6-0.1,1.2-0.2,1.7-0.5C22.2,11.3,21.7,11.9,21.1,12.3z" })
          ),
          h(
            "symbol",
            { id: "medium-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M30,15c0,8.3-6.7,15-15,15S0,23.3,0,15S6.7,0,15,0S30,6.7,30,15z M21.6,11.4C21.6,11.4,21.6,11.4,21.6,11.4      L21.6,11.4l-4-2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.2,0-0.3,0.1-0.4,0.2l-2.3,3.8l2.9,4.7L21.6,11.4C21.6,11.5,21.6,11.4,21.6,11.4 zM13.4,12.5v4.3l3.8,1.9L13.4,12.5z M17.8,18.9l3.1,1.6c0.4,0.2,0.7,0.1,0.7-0.3v-7.5L17.8,18.9z M12.8,11.4l-3.9-2      c-0.1,0-0.1-0.1-0.2-0.1c-0.2,0-0.3,0.1-0.3,0.4v8.5c0,0.2,0.2,0.5,0.4,0.6l3.5,1.7c0.1,0,0.2,0.1,0.2,0.1c0.2,0,0.4-0.2,0.4-0.4      L12.8,11.4C12.8,11.5,12.8,11.4,12.8,11.4z" })
          ),
          h(
            "symbol",
            { id: "linkedin-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M11.3,21.2h-3v-9.8h3V21.2z M9.8,10.2      c-1,0-1.6-0.7-1.6-1.5c0-0.9,0.6-1.5,1.6-1.5s1.6,0.7,1.6,1.5C11.4,9.6,10.8,10.2,9.8,10.2z M22.4,21.2h-3v-5.4      c0-1.3-0.4-2.1-1.5-2.1c-0.8,0-1.3,0.6-1.6,1.1c-0.1,0.2-0.1,0.5-0.1,0.8v5.6h-3v-6.7c0-1.2,0-2.2-0.1-3.1h2.6l0.1,1.4h0.1      c0.4-0.6,1.4-1.6,3-1.6c2,0,3.5,1.3,3.5,4.2V21.2z" })
          ),
          h(
            "symbol",
            { id: "behance-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M13,12.7c0-1.1-0.6-1.1-0.6-1.1h-3v2.2H12C12.5,13.9,13,13.7,13,12.7z" }),
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M17.3,10.5h4.1v1.2h-4.1V10.5z M15.3,17c0,3.1-3.1,3-3.1,3 h-5V9.8h5c1.6,0,2.8,0.9,2.8,2.7c0,1.9-1.6,1.9-1.6,1.9C15.5,14.4,15.3,17,15.3,17z M22.8,16.9h-5c0,1.9,1.7,1.7,1.7,1.7 c1.6,0,1.6-1.1,1.6-1.1h1.7c0,3-3.3,2.7-3.3,2.7c-4.1,0-3.8-3.9-3.8-3.9s0-3.9,3.8-3.9C23.4,12.3,22.8,16.9,22.8,16.9z" }),
            h("path", { d: "M19.5,13.9c-1.6,0-1.7,1.6-1.7,1.6h3.1C20.9,15.5,20.9,13.9,19.5,13.9z" }),
            h("path", { d: "M12.2,15.5H9.4v2.7H12c0.5,0,1.1-0.2,1.1-1.2C13.3,15.5,12.2,15.5,12.2,15.5z" })
          ),
          h(
            "symbol",
            { id: "instagram-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M21.1,10.4c-0.3-0.7-0.8-1.2-1.5-1.5c-0.5-0.2-1-0.3-1.5-0.3c-0.8,0-1.1,0-3.2,0s-2.3,0-3.2,0c-0.5,0-1,0.1-1.5,0.3 c-0.7,0.3-1.2,0.8-1.5,1.5c-0.2,0.5-0.3,1-0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.3,0,3.2c0,0.5,0.1,1,0.3,1.5c0.3,0.7,0.8,1.2,1.5,1.5 c0.5,0.2,1,0.3,1.5,0.3c0.8,0,1.1,0,3.2,0s2.3,0,3.2,0c0.5,0,1-0.1,1.5-0.3c0.7-0.3,1.2-0.8,1.5-1.5c0.2-0.5,0.3-1,0.3-1.5 c0-0.8,0-1.1,0-3.2s0-2.3,0-3.2C21.4,11.3,21.3,10.9,21.1,10.4z M15,19c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S17.2,19,15,19z M19.2,11.8c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C20.1,11.3,19.7,11.8,19.2,11.8z" }),
            h("circle", { cx: "15", cy: "15", r: "2.6" }),
            h("path", { d: "M15,0C15,0,15,0,15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15C30,6.7,23.3,0,15,0z M22.8,18.2c0,0.6-0.1,1.3-0.4,1.9 c-0.4,1-1.2,1.9-2.3,2.3c-0.6,0.2-1.2,0.4-1.9,0.4c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.6,0-1.3-0.1-1.9-0.4c-1-0.4-1.9-1.2-2.3-2.3 c-0.2-0.6-0.4-1.2-0.4-1.9c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.6,0.1-1.3,0.4-1.9C8,8.8,8.8,8,9.9,7.6c0.6-0.2,1.2-0.4,1.9-0.4 c0.8,0,1.1,0,3.2,0s2.4,0,3.2,0c0.6,0,1.3,0.1,1.9,0.4c1,0.4,1.9,1.2,2.3,2.3c0.2,0.6,0.4,1.2,0.4,1.9c0,0.8,0,1.1,0,3.2 S22.8,17.4,22.8,18.2z" })
          ),
          h(
            "symbol",
            { id: "dribble-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15.4,15c0.1,0,0.1,0,0.2,0c-0.1-0.3-0.3-0.6-0.4-0.9c-2.9,0.9-5.8,0.9-6.3,0.9c0,0,0,0.1,0,0.1c0,1.5,0.5,2.9,1.5,4 C10.7,18.5,12.4,15.9,15.4,15z M11.3,19.9c1.1,0.8,2.4,1.3,3.7,1.3c0.8,0,1.6-0.2,2.3-0.5c-0.1-0.6-0.5-2.4-1.3-4.6 C12.7,17.3,11.5,19.5,11.3,19.9z M19,10.4c-1.1-1-2.5-1.5-4-1.5c-0.4,0-0.9,0-1.3,0.1c0.3,0.4,1.3,1.8,2.2,3.5 C17.9,11.7,18.8,10.6,19,10.4z M14.5,12.9c-0.9-1.7-1.9-3.1-2.2-3.4c-1.7,0.8-2.9,2.4-3.3,4.2h0C9.7,13.6,11.9,13.6,14.5,12.9z M17.4,15.8c0.7,2,1.1,3.7,1.2,4.2c1.3-0.9,2.2-2.4,2.5-4c-0.3-0.1-1.3-0.3-2.5-0.3C18.1,15.7,17.7,15.7,17.4,15.8z M15,0 C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M15,22.3c-4.1,0-7.3-3.3-7.3-7.3c0-4,3.3-7.3,7.3-7.3 c4,0,7.3,3.3,7.3,7.3C22.3,19,19,22.3,15,22.3z M16.4,13.6c0.1,0.3,0.3,0.6,0.4,0.8c0,0.1,0.1,0.2,0.1,0.3c0.4-0.1,0.9-0.1,1.4-0.1 c1.3,0,2.4,0.2,2.8,0.3c0-1.3-0.5-2.6-1.3-3.7C19.5,11.5,18.5,12.7,16.4,13.6z" })
          ),
          h(
            "symbol",
            { id: "github-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,14.9C15,14.9,15,14.9,15,14.9L15,14.9c-1.9,0-3.5-0.5-4.5,0.4c-0.6,0.5-0.8,1.2-0.8,1.9c0,2.9,2.3,3.2,5.3,3.2h0 c3,0,5.3-0.4,5.3-3.2c0-0.7-0.2-1.3-0.8-1.9C18.5,14.4,16.9,14.9,15,14.9z M12.5,18.9c-0.6,0-1-0.6-1-1.4c0-0.8,0.5-1.4,1-1.4 s1,0.6,1,1.4C13.5,18.2,13.1,18.9,12.5,18.9z M17.5,18.9c-0.6,0-1-0.6-1-1.4c0-0.8,0.5-1.4,1-1.4c0.6,0,1,0.6,1,1.4 C18.5,18.2,18.1,18.9,17.5,18.9z M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M16.4,21.2c-0.3,0-0.8,0-1.4,0 c-0.6,0-1.1,0-1.4,0c-1.2,0-5.9-0.1-5.9-5.8c0-1.3,0.4-2.3,1.2-3.1C8.8,12,8.8,10.4,9.4,8.8c0,0,1.4,0.2,3.6,1.6 c0.5-0.1,1.2-0.2,2-0.2s1.5,0.1,2,0.2c2.2-1.5,3.6-1.6,3.6-1.6c0.6,1.6,0.6,3.2,0.5,3.5c0.7,0.8,1.2,1.8,1.2,3.1 C22.3,21.1,17.6,21.2,16.4,21.2z" })
          ),
          h(
            "symbol",
            { id: "pinterest-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M16,18.6c-1-0.1-1.4-0.5-2.1-1c-0.4,2.2-0.9,4.3-2.4,5.3\nc-0.5-3.3,0.7-5.8,1.2-8.4c-0.9-1.5,0.1-4.6,2-3.8c2.3,0.9-2,5.7,0.9,6.3c3.1,0.6,4.3-5.3,2.4-7.3c-2.8-2.8-8-0.1-7.4,3.9\nc0.2,1,1.2,1.3,0.4,2.6c-1.8-0.4-2.3-1.8-2.2-3.6c0.1-3,2.7-5.2,5.3-5.4c3.3-0.4,6.4,1.2,6.9,4.3C21.6,15,19.6,18.8,16,18.6z" })
          ),
          h(
            "symbol",
            { id: "flickr-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M11,18.1c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1\nc1.7,0,3.1,1.4,3.1,3.1S12.7,18.1,11,18.1z M19,18.1c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1\nS20.7,18.1,19,18.1z" })
          ),
          h(
            "symbol",
            { id: "youtube-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M17.5,14.7L14,13.1c-0.3-0.1-0.6,0-0.6,0.4v3.1c0,0.3,0.3,0.5,0.6,0.4l3.5-1.6C17.8,15.1,17.8,14.9,17.5,14.7z M15,0\nC6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M15,21.1c-7.7,0-7.8-0.7-7.8-6.1S7.3,8.9,15,8.9s7.8,0.7,7.8,6.1\nS22.7,21.1,15,21.1z" })
          ),
          h(
            "symbol",
            { id: "vimeo-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M21.9,12.1c-0.8,4.6-5.2,8.4-6.6,9.3\nc-1.3,0.9-2.6-0.4-3-1.3c-0.5-1.1-2-6.8-2.4-7.3c-0.4-0.5-1.6,0.5-1.6,0.5l-0.6-0.8c0,0,2.4-2.9,4.3-3.3c1.9-0.4,1.9,3,2.4,5\nc0.5,1.8,0.8,2.9,1.2,2.9c0.4,0,1.2-1,2-2.6c0.8-1.6,0-3-1.7-2C16.5,8.5,22.7,7.6,21.9,12.1z" })
          ),
          h(
            "symbol",
            { id: "googleplus-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M14.1,21.4c-0.9,0.5-2,0.5-2.3,0.5c-0.1,0-0.1,0-0.1,0\ns0,0-0.1,0c-0.6,0-3.7-0.1-3.7-2.9c0-2.7,3.3-2.9,4.3-2.9h0c-0.6-0.8-0.5-1.6-0.5-1.6c-0.1,0-0.1,0-0.2,0c-0.4,0-1.1-0.1-1.8-0.5\nc-0.8-0.5-1.2-1.4-1.2-2.5c0-3.3,3.6-3.5,3.7-3.5H16v0.1c0,0.4-0.7,0.5-1.2,0.6c-0.2,0-0.5,0.1-0.6,0.1c0.9,0.5,1.1,1.3,1.1,2.4\nc0,1.3-0.5,2-1.1,2.5c-0.3,0.3-0.6,0.5-0.6,0.9c0,0.3,0.4,0.6,0.8,1C15,16.2,16,17,16,18.4C16,19.8,15.4,20.8,14.1,21.4z M22,15\nh-2.3v2.3h-1.6V15h-2.3v-1.6h2.3v-2.3h1.6v2.3H22V15z M12.2,16.8c-0.1,0-0.2,0-0.2,0c-0.7,0.1-1.3,0.3-1.8,0.7\nC9.7,18,9.5,18.5,9.5,19c0.1,1.1,1.3,1.8,2.7,1.7c1.4-0.1,2.4-0.9,2.3-2C14.5,17.6,13.6,16.8,12.2,16.8z M13.6,10.8\nc-0.4-1.3-1-1.7-1.9-1.7c-0.1,0-0.2,0-0.3,0c-0.4,0.1-0.7,0.5-0.9,1c-0.2,0.5-0.2,1.1,0,1.7c0.3,1.1,1.1,1.9,1.9,1.9\nc0.1,0,0.2,0,0.3,0C13.4,13.3,13.9,12,13.6,10.8z" })
          ),
          h(
            "symbol",
            { id: "time-icon", viewbox: "0 0 20 20" },
            h("path", { d: "M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10c5.5,0,10-4.5,10-10S15.5,0,10,0z M10,18c-4.4,0-8-3.6-8-8s3.6-8,8-8 s8,3.6,8,8S14.4,18,10,18z M10.5,10.2l4.5,2.7l-0.8,1.2L9,11V5h1.5V10.2z" })
          ),
          h(
            "symbol",
            { id: "role-icon", viewbox: "0 0 20 20" },
            h("path", { d: "M18,4.5h-4V2.7c0-1.2-1-2.2-2.2-2.2H8.2C7,0.5,6,1.5,6,2.7v1.8H2c-1.1,0-2,0.9-2,2v2v2v7c0,1.1,0.9,2,2,2h16  c1.1,0,2-0.9,2-2v-7v-2v-2C20,5.4,19.1,4.5,18,4.5z M8,2.7c0-0.1,0.1-0.2,0.2-0.2h3.6c0.1,0,0.2,0.1,0.2,0.2v1.8H8V2.7z M18,17.5H2 v-7h16V17.5z M2,8.5v-2h4h8h4v2H2z" })
          ),
          h(
            "symbol",
            { id: "origin-icon", viewbox: "0 0 20 20" },
            h("path", { d: "M10,0C6.1,0,3,3.1,3,7c0,5.2,7,13,7,13s7-7.8,7-13C17,3.1,13.9,0,10,0z M10,9.5C8.6,9.5,7.5,8.4,7.5,7  S8.6,4.5,10,4.5s2.5,1.1,2.5,2.5S11.4,9.5,10,9.5z" })
          ),
          h(
            "symbol",
            { id: "website-icon", viewbox: "0 0 30 30" },
            h("path", { d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M22.8,22.6h-5V16h-6v6.6h-5v-10l8-6l8,6V22.6z" })
          ),
          h(
            "symbol",
            { id: "about-icon-quality", viewbox: "0 0 100.8 94.2" },
            h("path", { d: "M89.6,11.9H9.1c-2.6,0-4.6,2.1-4.6,4.6V72c0,2.6,2.1,4.6,4.6,4.6l24.8-0.5l-12.4-2.3L9.1,73.6c-0.9,0-1.5-0.7-1.5-1.5V25.9\nh83.6V72c0,0.9-0.7,1.5-1.5,1.5l-20.9,2.6l8.9,0.5h12c2.6,0,4.6-2.1,4.6-4.6V16.5C94.3,14,92.2,11.9,89.6,11.9z M68.7,21.2\nc-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3C71,20.2,70,21.2,68.7,21.2z M77.2,21.2c-1.3,0-2.3-1-2.3-2.3\nc0-1.3,1-2.3,2.3-2.3s2.3,1,2.3,2.3C79.6,20.2,78.5,21.2,77.2,21.2z M85.8,21.2c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3\ns2.3,1,2.3,2.3C88.1,20.2,87,21.2,85.8,21.2z M75.1,37.5L37.6,32L22.1,43.3c-2.1,1-3.1,3.5-2.3,5.7L26,66.8c0.7,1.9,2.5,3.2,4.5,3.1\nL57.2,69l-1.7,8l9.2-8.2l2.9-0.8c1.7-0.2,3.2-1.4,3.8-3.1L79,43.7C80,40.9,78.1,37.9,75.1,37.5z M41.9,60.3l-8.9-9.6l2.3-2.1l7,7.6\nL59.6,42l1.9,2.5L41.9,60.3z M2.1,39.6C2.6,42.4,3,45.2,3.4,48c0.4,2.8,0.7,5.6,0.9,8.4C4.6,59.2,4.8,62,5,64.8\nc0.2,2.8,0.4,5.6,0.4,8.5c-0.9-2.7-1.6-5.5-2.2-8.3c-0.6-2.8-1-5.6-1.2-8.4c-0.3-2.8-0.4-5.7-0.4-8.5C1.5,45.3,1.7,42.5,2.1,39.6z\nM34.3,30.1c-0.5,1.1-1.3,1.9-2.1,2.6c-0.8,0.7-1.7,1.3-2.6,1.9c-0.9,0.5-1.9,1-2.9,1.3c-1,0.4-2.1,0.6-3.2,0.7\nc0.7-0.9,1.5-1.7,2.4-2.3c0.8-0.7,1.7-1.2,2.6-1.7c0.9-0.5,1.8-1,2.8-1.4C32.2,30.8,33.2,30.5,34.3,30.1z M96.9,13.1\nc0.8,1.9,1,3.9,1.2,5.8c0.2,1.9,0.3,3.9,0.2,5.8c0,1.9-0.1,3.9-0.3,5.8c-0.2,1.9-0.5,3.9-1.1,5.8c-0.4-1.9-0.6-3.9-0.8-5.8\nc-0.1-1.9-0.2-3.9-0.2-5.8c0-1.9,0.1-3.9,0.3-5.8C96.5,17,96.7,15.1,96.9,13.1z" })
          ),
          h(
            "symbol",
            { id: "about-icon-people", viewbox: "0 0 100.8 94.2" },
            h("path", { d: "M17.8,78.2c0.1,1.2,0.3,2.3,0.7,3.6c-1.2-0.7-1.9-1.9-2.4-3.2c-0.5-1.3-0.7-2.6-0.8-3.9c-0.1-1.3,0-2.6,0.2-3.8\nc0.2-1.3,0.5-2.5,0.7-3.8c0.7,1.2,0.9,2.5,1.1,3.8c0.2,1.3,0.3,2.5,0.3,3.7C17.7,75.8,17.7,77,17.8,78.2z M85.2,66.7\nc-0.4-1.3-1-2.6-2-3.5c0.2,1.3,0.2,2.5,0.2,3.7c0,1.2-0.1,2.4-0.2,3.6l-0.3,3.6c-0.1,1.2-0.2,2.5-0.2,3.8c0.9-1,1.5-2.2,2-3.4\nc0.4-1.2,0.7-2.6,0.8-3.9C85.6,69.4,85.5,68,85.2,66.7z M30.6,63.4h-5c-3.4,0-6.2,2.8-6.2,6.2v7.9c0,1.7,1.4,3.2,3.1,3.2v8.1\nc0,1.8,1.4,3.2,3.2,3.2h4.8c1.8,0,3.2-1.4,3.2-3.2v-8.1c1.7,0,3.1-1.5,3.1-3.2v-7.9C36.9,66.2,34.1,63.4,30.6,63.4z M22.4,57\nc-0.3-0.7-0.5-1.5-0.5-2.3c0-3.4,2.8-6.2,6.2-6.2c3.4,0,6.2,2.8,6.2,6.2c0,0.8-0.2,1.6-0.5,2.3c-0.9,2.3-3.2,3.9-5.8,3.9\nC25.5,60.9,23.3,59.3,22.4,57z M24.3,56c2.3,5.4,6.9,1.5,7.7,0C30.5,55.2,24.3,56,24.3,56z M53,63.4h-5c-3.4,0-6.2,2.8-6.2,6.2v7.9\nc0,1.7,1.4,3.2,3.1,3.2v8.1c0,1.8,1.4,3.2,3.2,3.2h4.8c1.8,0,3.2-1.4,3.2-3.2v-8.1c1.7,0,3.1-1.5,3.1-3.2v-7.9\nC59.2,66.2,56.4,63.4,53,63.4z M44.8,57c-0.3-0.7-0.5-1.5-0.5-2.3c0-3.4,2.8-6.2,6.2-6.2c3.4,0,6.2,2.8,6.2,6.2\nc0,0.8-0.2,1.6-0.5,2.3c-0.9,2.3-3.2,3.9-5.8,3.9C47.9,60.9,45.7,59.3,44.8,57z M46.6,55.2c2.3,5.4,6.2,3.9,7.7,0.8\nC52.8,55.2,46.6,55.2,46.6,55.2z M75.4,63.4h-5c-3.4,0-6.2,2.8-6.2,6.2v7.9c0,1.7,1.4,3.2,3.1,3.2v8.1c0,1.8,1.4,3.2,3.2,3.2h4.8\nc1.8,0,3.2-1.4,3.2-3.2v-8.1c1.7,0,3.1-1.5,3.1-3.2v-7.9C81.6,66.2,78.8,63.4,75.4,63.4z M72.9,48.4c3.4,0,6.2,2.8,6.2,6.2\nc0,0.8-0.2,1.6-0.5,2.3c-0.9,2.3-3.2,3.9-5.8,3.9c-2.6,0-4.8-1.6-5.8-3.9c-0.3-0.7-0.5-1.5-0.5-2.3C66.7,51.2,69.5,48.4,72.9,48.4z\nM69,55.2c2.3,5.4,7.7,4.6,7.7-1.5C75.2,52.9,69,55.2,69,55.2z M46.3,19.6l4.6,1.1l1.6-3.4l-4.6-1.1L46.3,19.6z M67.8,43.6l-6.7-8\nl-9.5,0.3l-1.1,7.7l-4.3-7.5l-8.9,0.3l-7.7,6.5l2.1-6.3l-0.1,0c-2.2,0-4.2-1.2-4.9-3.1l-6.8-17.7c-0.9-2.2,0.2-4.6,2.6-5.7\nc0,0,20.3-7.3,27.4-7.9L74,6.6c3.3,0.3,6.6,3.8,6.6,7.7l-3.8,17.3c-0.6,1.6-2.2,2.8-4.1,3l-3.2,0.8L67.8,43.6z M60.5,15.6l-2.9-0.7\nl1.4-2.9l-3.8-0.5L54,14l-4.5-1.1l1.7-3.6l-3.8-0.4L45.9,12l-2.6-0.6l-1.6,3.3l2.6,0.6l-1.6,3.4l-1.9-0.5l-1.6,3.3l2,0.5l-1.3,2.7\nl3.8,0.3l1-2.2l4.6,1.1l-2,4.2l3.9,0.3l1.7-3.6l2.3,0.6l1.6-3.3l-2.3-0.6l1.6-3.4l2.8,0.7L60.5,15.6z" })
          ),
          h(
            "symbol",
            { id: "about-icon-freedom", viewbox: "0 0 100.8 94.2" },
            h("path", { d: "M3.9,59.6c0.1,4.1,0.3,8.2,0.8,12.3c-1.3-3.9-1.9-8.1-2.3-12.2C2,55.6,2,51.4,2.3,47.2c0.3-4.1,0.9-8.3,2-12.3\nc1.1-4,2.6-8,5.1-11.3c-1.8,3.7-2.9,7.7-3.7,11.6c-0.7,4-1.2,8-1.5,12.1C3.9,51.4,3.8,55.5,3.9,59.6z M59.1,17\nc0.6,1.2,1.3,2.3,2.2,3.3c0.9,1,2.2,1.8,3.6,1.9c-0.8-1.1-1.3-2.2-1.8-3.2l-1.5-3.2c-0.5-1.1-1.1-2.2-1.7-3.3\nc-0.7-1.1-1.4-2.2-2.6-3c0.1,1.4,0.2,2.6,0.5,3.8C58.2,14.6,58.6,15.9,59.1,17z M30.5,90.4c-4.3,0-8.6,0.1-12.9,0.3\nc-4.3,0.2-8.6,0.5-12.9,0.9c4.3,0.3,8.6,0.5,12.9,0.6c4.3,0.1,8.6,0.1,12.9,0.1c4.3,0,8.6,0,12.9-0.2c4.3-0.1,8.6-0.3,12.9-0.6\nc-4.3-0.5-8.6-0.7-12.9-0.9C39.2,90.4,34.8,90.4,30.5,90.4z M98.7,21.1l-1.9-1.5c0,0-0.9,1.6-2,3.2c-0.1,2.7-1.1,5.9-3,8.5\nc-5.1,7.1-9.6,1.5-9.6,1.5s-1.5,2.5-3,5.1l10.9-0.6l-4,24H70.9v26.8H5.5l0-46c0-14.9,11.6-27.7,27.2-30.2C31.6,10.9,31,9.4,31,7.9\nc0-3.3,2.8-5.9,6.3-5.9c3.5,0,6.3,2.7,6.3,5.9c0,1.4-0.5,2.8-1.5,3.9c7.2,0.8,14,3.9,19.2,8.7l0,0c4.3,4,7.3,9,8.7,14.4\nc0.1-0.1,0.2-0.1,0.3-0.2l9.4-5.4C61.5,23.8,63.5,9.5,64.6,4.7c0.2-0.8,1.1-1.1,1.7-0.6c4.5,3.4,19.3,14.4,19.9,14.3L76.1,9.6\nc0,0-0.4-1.8-0.2-4.9c0-0.7,0.9-1,1.3-0.5l12.1,12.3c2.1-1.3,5.5-2.7,7.6,0.8C98.9,20.3,98.7,21.1,98.7,21.1z M39.8,13.9\nc-0.2,0-0.4,0-0.5,0v25.4h10.6c-0.3-6.6-1.4-12.7-3.4-17.5C44.6,17.3,42.2,14.4,39.8,13.9z M13.9,42.2c0-10.1,4.1-19.6,10.6-25.3\nC14.4,21.7,7.8,31.4,7.8,42.2v40h6.1V42.2z M25.9,42.2c0-11.9,2.9-22.7,7.5-27.7c-9.9,2.8-17.2,14.4-17.2,27.7v40h9.7V42.2z\nM36.9,14.4c-5,2.7-8.7,14.6-8.7,27.7v40h8.7V14.4z M37.3,11.6c2.2,0,4-1.6,4-3.7c0-2-1.8-3.7-4-3.7c-2.2,0-4,1.6-4,3.7\nC33.3,9.9,35.1,11.6,37.3,11.6z M49.9,61.3H39.3v20.8h10.6V61.3z M49.9,42.2c0-0.6,0-1.3,0-1.9H39.3v20.1h10.6V42.2z M52.1,39.3h4.5\nl3.3-0.2c-0.5-6.4-2.8-12.4-6.4-17c-2.2-2.9-4.9-5.1-7.9-6.5c1.1,1.4,2,3.2,2.9,5.3C50.6,25.9,51.9,32.4,52.1,39.3z M52.2,40.2\nc0,0.6,0,1.3,0,1.9v18.2h4V40.2H52.2z M60.1,61.3h-2.9h-1h-4v20.8h7.9V61.3z M60.1,42.2c0-0.7,0-1.4-0.1-2.1l-2.9,0.2v20.2h2.9V42.2\nz M62.2,39l6.2-0.4c-0.8-6.2-3.8-11.9-8.7-16.4c-2.4-2.2-5.1-4.1-8.1-5.4c1.3,1.1,2.6,2.4,3.7,3.9C59.3,25.7,61.6,32.1,62.2,39z\nM68.6,61.3h-6.3v20.8h6.3V61.3z M68.6,42.2c0-0.9,0-1.8-0.1-2.6l-6.2,0.4c0,0.7,0.1,1.5,0.1,2.3v18.2h6.3V42.2z M78.6,39\nC78,40,77.4,41,77,41.9c-0.5,1-1.8,1.1-2.5,0.3c-0.8-0.8-1.7-1.9-2.6-2.9l-1.2,0.1c0.1,0.9,0.1,1.8,0.1,2.7v18.2h14.3l3.7-22\nL78.6,39z M94.3,17.7c0-0.6-0.5-1-1-1s-1,0.5-1,1c0,0.6,0.5,1,1,1S94.3,18.2,94.3,17.7z" })
          ),
          h(
            "symbol",
            { id: "slider_arrow_left", viewBox: "0 0 24 24" },
            h("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" })
          ),
          h(
            "symbol",
            { id: "slider_arrow_right", viewBox: "0 0 24 24" },
            h("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })
          )
        )
      ),
      // end svg elements

      //Footer
      h(
        "footer",
        { className: "footer" },

        // Main links
        h(
          "ul",
          { className: "footer__menu" },
          h(
            "li",
            { className: "footer__menu-item" },
            h(
              "a",
              { href: "/" },
              "home"
            )
          ),
          h(
            "li",
            { className: "footer__menu-item" },
            h(
              "a",
              { href: "/pages/about" },
              "About"
            )
          ),
          h(
            "li",
            { className: "footer__menu-item" },
            h(
              "a",
              { href: "/blog" },
              "Blog"
            )
          )
        ),

        // Social Icons
        h(
          "ul",
          { className: "footer__social-icons" },
          h(
            "li",
            { className: "footer__social-icons__item" },
            h(
              "a",
              { href: entryFacebook, target: "_blank" },
              h(
                "svg",
                null,
                h("use", { href: "#facebook-icon" })
              )
            )
          ),
          h(
            "li",
            { className: "footer__social-icons__item" },
            h(
              "a",
              { href: entryInstagram, target: "_blank" },
              h(
                "svg",
                null,
                h("use", { href: "#instagram-icon" })
              )
            )
          ),
          h(
            "li",
            { className: "footer__social-icons__item" },
            h(
              "a",
              { href: entryTwitter, target: "_blank" },
              h(
                "svg",
                null,
                h("use", { href: "#twitter-icon" })
              )
            )
          )
        ),

        // Copyright
        h(
          "div",
          { className: "footer__copyright" },
          h(
            "a",
            { href: "/", className: "footer__copyright-logo" },
            h(
              "svg",
              null,
              h("use", { href: "#logo-main" })
            )
          ),
          h(
            "p",
            null,
            entryCopyright
          )
        )
      )
    )
  }
});

CMS.registerPreviewTemplate("footer", footerPreview);
CMS.registerPreviewTemplate("footer-pt", footerPreview);
CMS.registerPreviewStyle("/css/app.css");
CMS.registerPreviewStyle("https://fonts.googleapis.com/css?family=Roboto:500,700");
