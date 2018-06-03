$.get("https://opentdb.com/api.php?amount=15&type=multiple", questions)
    function questions(data) {
        results = data.results;
        for (let i = 0; i < results.length; i++) {
            answers = results[i].incorrect_answers;
            answers.push(results[i].correct_answer);
            answers.sort();
			$('h3').append('<h2>Category:</h2><p>'
                + results[i].category 
                + '</p>Question:<p>'
                + results[i].question
                + '</p><h4>Answers:<ul>');
            for (let j = 0; j < answers.length; j++){
                $('h3').append('<li>' + answers[j] + '</li>');
            }
            $('h3').append('</ul>');
        }
    }