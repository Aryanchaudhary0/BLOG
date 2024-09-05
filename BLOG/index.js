$(document).ready(function() {
    $('.read-more').click(function() {
        $(this).siblings('.overlay').fadeIn();
    });

    $('.close').click(function() {
        $(this).parent('.overlay').fadeOut();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('article').length) {
            $('.overlay').fadeOut();
        }
    });

    let postCount = 1;

    $('#add-post').click(function() {
        postCount++;
        const newPost = `
            <article>
                <h2>Blog Post Title ${postCount}</h2>
                <p>This is an additional blog post added dynamically.</p>
                <button class="read-more">Read More</button>
                <div class="overlay">
                    <p>This is the extended content for Blog Post Title ${postCount}.</p>
                    <button class="close">Close</button>
                </div>
            </article>
        `;
        $('#posts').append(newPost);
    });
});
