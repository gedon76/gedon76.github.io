document.addEventListener('DOMContentLoaded', function () {
    var content = document.getElementById('thatstupidtext'); // Замените 'content' на ID вашего контейнера с текстом
    content.style.visibility="hidden";
    var wordsPerMinute = 200; // Среднее количество слов в минуту для чтения
    var text = content.innerText.trim();
    var wordCount = text.split(/\s+/).length;
    var readingTime = Math.ceil(wordCount / wordsPerMinute);

    var readingTimeElement = document.getElementById('reading-time');
    readingTimeElement.textContent = 'Reading time: ' + readingTime + ' minute(s)';
});