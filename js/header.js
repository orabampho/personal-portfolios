class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <div class="logo">
          <p>Rabampho</p>
        </div>
        <ul>
          <li><a href="../index.html" class="active">HOME</a></li>
          <li><a href="../projects.html">Projects</a></li>
          <li><a href="../api-unit-tests.html">Api-Unit-Tests</a></li>
          <li><a href="../database-diagram.html">Database-Diagrams</a></li>
          <li><a href="../resume.html">Resume</a></li>
          <li><a href="../about.html">About Me</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define("header-component", Header);