<template>
    <div class="content">
        <hr>
        <h3>15 Comments</h3>
        <div>
            <label for="display_name">Name: </label>
            <input required placeholder="Display Name" id="display_name" type="text">
        </div>
        <div class="mt-16">
            <label for="comment">Comment: </label>
            <textarea required placeholder="Comment" name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <div class="mb-64">
            <p>
                <a href="#" class="button">Save Comment</a>
            </p>
        </div>
        <div id="comment-section" class="mt-16">
            <div>
                <div class="name">
                    <p><strong>Michael Brooks</strong></p>
                </div>
                <div class="comment mb-64">
                    <p>This is a comment I made</p>
                </div>
            </div>
            <div>
                <div class="name">
                    <p><strong>Michael Brooks</strong></p>
                </div>
                <div class="comment mb-64">
                    <p>This is a comment I made</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                comments: {},
            }
        },
        mounted() {
            fetch('https://comments.michaelbrooks.co.uk/api/comments' + window.location.pathname)
        }
    }
</script>

<style>
    .mt-16 {
        margin-top: 16px;
    }
    .mb-64 {
        margin-bottom: 64px;
    }
    textarea, input[type=text] {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        padding: 10px;
        width: 97%;
    }
    .content a.button {
        font-size: 0.9em;
        color: #fff;
        margin: 0.2em auto;
        width: 100%;
        text-align: center;
        padding: 12px 24px;
        display: inline-block;
        vertical-align: middle;
    }
    .content a {
        color: #42b983;
        font-weight: 600;
    }
    a.button, input.button {
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #fff;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }
    a {
        text-decoration: none;
        color: #304455;
    }
    .content p, .content ul, .content ol {
        line-height: 1.6em;
    }
</style>