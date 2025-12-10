
section.gv-modal.account-type>div.gv-modal-content>div>div {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
}

section.gv-modal.account-type>div.gv-modal-content>div>div>a {
    flex: 0 0 auto;
    text-align: center;
}

section.gv-modal.account-type>div.gv-modal-content>div>div>a:hover>span {
    color: #4ab37e;
}

section.gv-modal.account-type>div.gv-modal-content>div>div>a>span {
    color: #727272;
    display: block;
    font-size: 18px;
}

section.gv-modal.account-type>div.gv-modal-content>div>strong {
    color: #313131;
    display: block;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 20px;
    text-align: center;
}

.gv-alert {
    align-items: center;
    background-color: #727272;
    border: 1px solid #727272;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    opacity: 1;
    overflow: hidden;
    transition: opacity ease 1s;
    z-index: 1001;
}

.gv-alert>.icon {
    color: #fff;
    flex: 0 0 auto;
    position: relative;
    text-align: center;
    width: 50px;
}

.gv-alert>.icon>i {
    font-size: 16px;
    line-height: 16px;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
}

.gv-alert>.text {
    background-color: #ededed;
    color: #313131;
    flex: 1 1 auto;
    font-size: 14px;
    padding: 10px 15px;
}

.gv-alert.fade {
    opacity: 0;
}

.gv-alert.fixed {
    box-shadow: 0 4px 15px rgba(0,0,0,.18);
    left: 50%;
    max-width: calc(100% - 40px);
    position: fixed;
    top: 40px;
    transform: translateX(-50%);
}

.gv-alert.hide {
    display: none;
}

.gv-alert.danger,.gv-alert.error {
    background-color: #ed4949;
    border-color: #ed4949;
}

.gv-alert.danger>.text,.gv-alert.error>.text {
    background-color: #f7e6e6;
}

.gv-alert.info {
    background-color: #5895ac;
    border-color: #5895ac;
}

.gv-alert.info>.text {
    background-color: #e6edef;
}

.gv-alert.success {
    background-color: #4ab37e;
    border-color: #4ab37e;
}

.gv-alert.success>.text {
    background-color: #e9f7f1;
}

.gv-alert.warning {
    background-color: #ffd641;
    border-color: #ffd641;
}

.gv-alert.warning>.text {
    background-color: #f8f4e7;
}

section.gv-modal.alert {
    justify-content: safe center;
}

section.gv-modal.alert>.gv-modal-content {
    font-family: "Open Sans",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    max-width: 600px;
    width: auto;
}

section.gv-modal.alert>.gv-modal-content>div>div.actions {
    display: flex;
    margin-top: 30px;
}

section.gv-modal.alert>.gv-modal-content>div>div.actions>.gv-button.dismiss {
    color: #fff;
    flex: 1 1 auto;
    font-family: "Open Sans",Helvetica,Arial,sans-serif;
    font-size: 16px;
    letter-spacing: .64125px;
    line-height: 22px;
    padding: 12px;
    text-align: center;
}

section.gv-modal.alert>.gv-modal-content>div>div.icon>picture {
    display: flex;
    justify-content: center;
}

section.gv-modal.alert>.gv-modal-content>div>div.icon>picture>img {
    flex: 0 0 auto;
}

section.gv-modal.alert>.gv-modal-content>div>div.message {
    color: #313131;
    font-size: 14px;
    line-height: 19px;
    padding-top: 20px;
    text-align: left;
}

section.gv-modal.confirm>.gv-modal-content {
    max-width: 600px;
    width: auto;
}

section.gv-modal.confirm>.gv-modal-content>div>div.message {
    padding-top: 20px;
    text-align: center;
}

section.gv-modal.confirm>.gv-modal-content>div>div.actions {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-top: 30px;
}

section.gv-modal.confirm>.gv-modal-content>div>div.actions>.gv-button.reject {
    margin-right: 30px;
}

.gv-public>footer {
    background-color: #313131;
    color: #999;
    padding: 15px 20px;
    position: relative;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    z-index: 3;
}

.gv-public>footer>div.gv-content {
    align-items: baseline;
    display: flex;
}

.gv-public>footer>div.gv-content>div.logo {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    text-align: left;
}

.gv-public>footer>div.gv-content>div.logo>div.gv-logo {
    flex: 0 0 auto;
    margin: 5px 20px 5px 0;
    position: relative;
}

.gv-public>footer>div.gv-content>div.logo>div.gv-logo>a {
    display: inline-block;
}

.gv-public>footer>div.gv-content>div.logo>div.gv-logo>a>picture>img {
    display: inherit;
    position: relative;
    top: 3px;
}

.gv-public>footer>div.gv-content>div.logo>div.gv-menu {
    margin: 5px 20px 5px 0;
}

.gv-public>footer>div.gv-content>div.logo>div.gv-menu>a>i {
    font-size: 18px;
}

.gv-public>footer>div.gv-content>div.logo>div.gv-menu>a>span {
    font-size: 18px;
    margin: 0 10px;
}

.gv-public>footer>div.gv-content>div.links {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    text-align: right;
}

.gv-public>footer>div.gv-content>div.links ol.link-group {
    display: inline-block;
    flex: 1 1 auto;
    list-style-type: none;
    margin: 0 10px;
    padding: 0;
    white-space: normal;
}

.gv-public>footer>div.gv-content>div.links ol.link-group.separator>li {
    border-left: 1px solid #999;
    padding-left: 10px;
}

.gv-public>footer>div.gv-content>div.links ol.link-group.separator>li.first {
    border-left: 0;
    padding-left: 0;
}

.gv-public>footer>div.gv-content>div.links ol.link-group>li {
    display: inline-block;
    font-size: 18px;
    margin: 5px;
}

.gv-public>footer>div.gv-content>div.links ol.link-group>li>a {
    color: #999;
    cursor: pointer;
    text-decoration: none;
}

.gv-public>footer>div.gv-content>div.links ol.link-group>li>a>i {
    font-size: 24px;
}

label.gv-checkbox {
    align-items: center;
    color: #313131;
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}

label.gv-checkbox>em {
    background-color: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    box-sizing: border-box;
    flex: 0 0 auto;
    height: 16px;
    margin-right: 10px;
    position: relative;
    width: 16px;
}

label.gv-checkbox>em::after {
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    content: ' ';
    display: block;
    height: 4px;
    left: 3px;
    position: absolute;
    top: 3px;
    transform: rotate(-45deg);
    width: 7px;
}

label.gv-checkbox>input[type='checkbox'] {
    display: none;
}

label.gv-checkbox>input[type='checkbox']:checked+em {
    background-color: #4ab37e;
}

label.gv-checkbox>span {
    text-align: left;
}

label.gv-radio {
    align-items: baseline;
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}

label.gv-radio:focus>em,label.gv-radio:hover>em {
    box-shadow: 0 0 0 1px #4ab37e;
}

label.gv-radio>em {
    background-color: #fff;
    box-shadow: 0 0 0 1px #cfcfcf;
    box-sizing: border-box;
    border: 4px solid #fff;
    border-radius: 50%;
    flex: 0 0 auto;
    height: 16px;
    width: 16px;
}

label.gv-radio>input[type=radio] {
    display: none;
}

label.gv-radio>input[type=radio]:checked+em {
    background-color: #4ab37e;
}

label.gv-radio>span {
    margin-left: 10px;
}

label.gv-radio>span>var {
    font-style: normal;
}

.gv-slides-container {
    display: flex;
    justify-content: space-evenly;
}

.gv-slides-container.nav-below {
    flex-direction: column;
    justify-content: normal;
}

.gv-slides-container ol.nav-dots {
    align-items: center;
    display: inline-flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
}

.gv-slides-container ol.nav-dots>li {
    cursor: pointer;
    flex: 0 0 auto;
    padding: 5px;
}

.gv-slides-container ol.nav-dots>li>a {
    background-color: #e7e7e7;
    border-radius: 50%;
    display: block;
    height: 8px;
    width: 8px;
}

.gv-slides-container ol.nav-dots>li>a.active {
    background-color: #4ab37e;
}

.gv-slides-container .nav {
    display: flex;
    flex: 0 0 auto;
    position: relative;
    width: 10px;
}

.gv-slides-container .nav.disabled {
    opacity: .25;
}

.gv-slides-container .nav.next {
    margin-left: 5px;
}

.gv-slides-container .nav.next>a:after {
    right: 5px;
    transform: rotate(135deg);
}

.gv-slides-container .nav.prev {
    margin-right: 5px;
}

.gv-slides-container .nav.prev>a:after {
    left: 5px;
    transform: rotate(-45deg);
}

.gv-slides-container .nav>a {
    flex: 1 1 auto;
    display: block;
    position: relative;
}

.gv-slides-container .nav>a:hover:after {
    border-left-color: #505050;
    border-right-color: #505050;
}

.gv-slides-container .nav>a:after {
    border-left: 2px solid #727272;
    border-top: 2px solid #727272;
    content: " ";
    display: inline-block;
    height: 12px;
    position: absolute;
    top: 50%;
    width: 12px;
}

.gv-slides-container ol.slides {
    display: block;
    flex: 0 1 auto;
    list-style-type: none;
    margin: 0;
    max-width: 100%;
    padding: 100% 0 0 100%;
    position: relative;
    width: 600px;
}

.gv-slides-container ol.slides.fit {
    width: unset;
}

.gv-slides-container ol.slides>li {
    display: block;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    transition: opacity linear .5s;
    z-index: 0;
}

.gv-slides-container ol.slides>li.slide-in {
    opacity: 1;
    z-index: 1;
}

.gv-slides-container ol.slides>li>a {
    display: inline-block;
    border: none;
    max-width: 100%;
    text-decoration: none;
    width: 600px;
}

.gv-swipe-horiz-lock {
    overflow-x: hidden;
}

.gv-swipe-vert-lock {
    overflow-y: hidden;
}

ul.gv-tabs {
    background-color: #cfcfcf;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 0 20px 0;
    padding: 0;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}

ul.gv-tabs.dark {
    background-color: #505050;
}

ul.gv-tabs.dark>li {
    background-color: #505050;
    color: #fff;
}

ul.gv-tabs.green {
    background-color: #3c9a6b;
}

ul.gv-tabs.green>li {
    background-color: #3c9a6b;
    color: #fff;
}

ul.gv-tabs>li {
    background-color: #cfcfcf;
    border-radius: 6px;
    color: #727272;
    flex: 1 1 auto;
    font-size: 18px;
    line-height: 1.4;
    text-align: center;
}

ul.gv-tabs>li.active {
    background-color: #fff;
    color: #4ab37e;
}

ul.gv-tabs>li>a {
    display: block;
    padding: 12px;
    white-space: nowrap;
}

.gv-tab-content {
    display: none;
}

.gv-tab-content.show {
    display: block;
}

div.gv-timepicker {
    position: relative;
}

div.gv-timepicker.open>div.dropdown {
    display: block;
}

div.gv-timepicker.open>span.value {
    border-bottom: 1px solid #4ab37e;
}

div.gv-timepicker.open>span.value.invalid {
    border-bottom: 1px solid #ed4949;
}

div.gv-timepicker>div.dropdown {
    border-radius: 0 0 4px 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.18);
    display: none;
    min-width: 100%;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: 100%;
}

div.gv-timepicker>div.dropdown>div {
    background-color: #f8f8f8;
    border: 1px solid #e7e7e7;
    padding: 10px;
}

div.gv-timepicker>div.dropdown>div>button.gv-button {
    display: block;
    font-size: 16px;
    width: 100%;
}

div.gv-timepicker>div.dropdown>div>input {
    background-color: #fff;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    box-sizing: border-box;
    color: #727272;
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
    padding: 8px 10px;
    width: 100%;
}

div.gv-timepicker>div.dropdown>div>input:focus {
    border: 1px solid #4ab37e;
    outline: none;
}

div.gv-timepicker>div.dropdown>div>input:-moz-placeholder {
    color: #cfcfcf;
}

div.gv-timepicker>div.dropdown>div>input::-moz-placeholder {
    color: #cfcfcf;
}

div.gv-timepicker>div.dropdown>div>input:-ms-input-placeholder {
    color: #cfcfcf;
}

div.gv-timepicker>div.dropdown>div>input::-webkit-input-placeholder {
    color: #cfcfcf;
}

div.gv-timepicker>div.dropdown>ol {
    list-style-type: none;
    margin: 0;
    max-height: 240px;
    overflow: auto;
    padding: 0;
    position: relative;
}

div.gv-timepicker>div.dropdown>ol>li {
    background-color: #fff;
    color: #727272;
    cursor: pointer;
    font-size: 15px;
    line-height: 18px;
    padding: 15px;
}

div.gv-timepicker>div.dropdown>ol>li.selected {
    color: #229b60;
    font-weight: bold;
}

div.gv-timepicker>div.dropdown>ol>li:hover {
    background-color: #e9f7f1;
    color: #313131;
}

div.gv-timepicker>div.dropdown>ol>li:hover.selected {
    color: #229b60;
}

div.gv-timepicker>span.value {
    border-bottom: 1px solid #cfcfcf;
    color: #727272;
    display: block;
    font-size: 20px;
    padding: 8px 0;
    white-space: nowrap;
    width: 100%;
}

div.gv-timepicker>span.value.invalid {
    border-bottom: 1px solid #ed4949;
}

div.gv-timepicker>span.value.placeholder {
    color: #cfcfcf;
}

.gv-tooltip-container {
    cursor: help;
    position: relative;
}

.gv-tooltip-container:hover>.gv-tooltip,.gv-tooltip-container:active>.gv-tooltip {
    display: block;
}

.gv-tooltip-container>.gv-tooltip {
    background-color: #313131;
    border-radius: 6px;
    bottom: 100%;
    box-shadow: 0 0 8px 4px rgba(0,0,0,.18);
    color: #fff;
    display: none;
    font-family: "Open Sans",Helvetica,Arial,sans-serif;
    font-size: 12px;
    font-weight: normal;
    left: 50%;
    line-height: 1.4;
    margin-bottom: 10px;
    padding: 8px 12px;
    position: absolute;
    transform: translateX(-50%);
    white-space: nowrap;
    z-index: 3;
}

.gv-tooltip-container>.gv-tooltip::before {
    border-bottom: 12px solid #313131;
    border-left: 0;
    border-right: 12px solid #313131;
    border-top: 0;
    bottom: -5.5px;
    content: " ";
    display: block;
    left: 50%;
    margin-left: -6px;
    position: absolute;
    transform: rotate(45deg);
}

.gv-tooltip-container>.gv-tooltip.bottom {
    bottom: unset;
    margin-bottom: unset;
    margin-top: 10px;
    top: 100%;
}

.gv-tooltip-container>.gv-tooltip.bottom::before {
    bottom: unset;
    top: -5.5px;
    transform: rotate(-45deg);
}

.gv-tooltip-container>.gv-tooltip.left {
    bottom: 50%;
    left: unset;
    right: 100%;
    margin-bottom: 0;
    margin-right: 10px;
    transform: translate(0,50%);
}

.gv-tooltip-container>.gv-tooltip.left::before {
    bottom: unset;
    left: unset;
    right: -5.5px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

@media screen and (max-width: 767px),(max-height:450px) {
    .gv-public>footer>div.gv-content {
        display:block;
    }

    .gv-public>footer>div.gv-content>div.logo {
        display: block;
        text-align: center;
    }

    .gv-public>footer>div.gv-content>div.logo>div.gv-logo {
        margin-right: 0;
    }

    .gv-public>footer>div.gv-content>div.logo>div.gv-logo>a {
        top: 0;
    }

    .gv-public>footer>div.gv-content>div.logo>div.gv-menu {
        margin-right: 0;
    }

    .gv-public>footer>div.gv-content>div.links {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 15px;
        text-align: center;
    }

    .gv-public>footer>div.gv-content>div.links>ol.link-group {
        white-space: normal;
    }

    .gv-public>footer>div.gv-content>div.links>ol.link-group.separator>li {
        border-left: 0;
        padding-left: 0;
    }

    ul.gv-tabs>li {
        font-size: 15px;
    }

    ul.gv-tabs>li>a {
        padding: 12px 6px;
    }

    .gv-tooltip-container:hover>.gv-tooltip,.gv-tooltip-container:active>.gv-tooltip {
        display: none;
    }
}
