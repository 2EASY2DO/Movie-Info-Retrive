$(()=>{
  const $plotTitle = $('<dt>').text('Plot');
  const $plot = $('<dd>').attr('id', 'plot');
  $('dl').append($plotTitle);
  $('dl').append($plot);
  $('form').on('submit', (event)=>{
        event.preventDefault();
        const input = $('input[type="text"]').val();
	$.ajax({
            url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + input
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Ratings[2].Source);
                $('#rated').append(` ${data.Ratings[2].Value}`);
                $('#plot').html(data.Plot)
            },
            ()=>{
                console.log('bad');
            }
        );
    })
})
