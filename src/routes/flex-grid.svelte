<style>

.grid-item {
	color: #fff;
    box-sizing: border-box;
	font-size: 1em;
	padding: 1em;
    overflow: hidden;
	text-align: center;
}

.grid-item-header {
    background-color: #A62E5C;
    grid-area: header;
}

.grid-item-navigation {
    background-color: #9BC850;
    grid-area: navigation;
}

.grid-item-content {
    background-color: #9BC850;
    grid-area: content;
}

.grid-item-sidebar {
    background-color: #9BC850;
    grid-area: sidebar;
}

.grid-item-footer {
    background-color: #A62E5C;
    grid-area: footer;
}

.grid-container {
    display: grid;
    height: calc(100vh - 2em);
    grid: 20% 1em 1fr 1em 20% / 4.4em 1em 1fr 1em 4.4em;
    grid-template-areas: 
    "header header header header header"
    ". . . . ."
    "navigation . content . sidebar"
    ". . . . ."
    "footer footer footer footer footer";
}

@media screen and (max-width: 590px) {
    
    .grid-container {
        grid: 1fr 1em 30% / 4.4em 1em 3.6em 1em 1fr 1em 4.4em;
        grid-template-areas:
        "header header header"
        ". . ."
        "navigation navigation navigation"
        ". . ."
        "content . sidebar"
        ". . ."
        "footer footer footer";
    }
    
}

@media screen and (max-width: 450px) {
    
    .grid-container {
        grid: 1fr / 4.4em 1em 3.6em 1em 1fr 1em 3.6em 1em 4.4em;
        grid-template-areas:
        "header"
        "."
        "navigation"
        "."
        "content"
        "."
        "sidebar"
        "."
        "footer"
    }   
}

</style>

<div class="grid-container">

  <header class="grid-item grid-item-header">
    <h1>Header</h1>
  </header>

  <nav class="grid-item grid-item-navigation">
    <h1>Nav</h1>
  </nav>

  <article class="grid-item grid-item-content">
    <h1>Main Content</h1>
  </article>

  <aside class="grid-item grid-item-sidebar">
    <h1>Sidebar</h1>
  </aside>

  <footer class="grid-item grid-item-footer">
    <h1>Footer</h1>
  </footer>

</div>
