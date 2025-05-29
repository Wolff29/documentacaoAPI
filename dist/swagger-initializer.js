window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: "documentacaoAPI.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    displaySearch: false, // Isso remove a barra de pesquisa
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
};
