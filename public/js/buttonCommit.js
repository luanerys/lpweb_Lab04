// $(document).ready(function() {
$("#artista-form").on("submit", function(e) {
  e.preventDefault();
  let nome = $("input[name=nome]").val();
  let nacionalidade = $("input[name=nacionalidade]").val();
  let data_nscmt = $("input[nome=data_nscmt]").val();

  let dataToSend = {
    nome: nome,
    nacionalidade: nacionalidade,
    data_nscmt: data_nscmt
  };

  dataToSend = JSON.stringify(dataToSend);
  console.log(dataToSend);
  $.ajax({
    url: "/artistas",
    method: "POST",
    data: dataToSend,
    contentType: "application/json;charset=utf-8",
    dataType: "json",
    cache: false,
    success: function(data) {
      console.log("on success " + data);
    },
    error: function(data) {
      console.log("on error " + data);
    }
  });
});
// });
