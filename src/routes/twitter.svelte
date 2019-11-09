
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
    let showTwitter = false;
    setTimeout(() => {
        showTwitter = true;
    }, 5000);
</script>

{#if showTwitter }
<div id="twitter-feeds" style="width: 100%">
			
    <table border="1" style="width: 100%" id="#twitter-feeds-table">
        <tr>
            <td valign="top">
                <div style="height: 1000px; overflow-y: scroll;">
                    <a class="twitter-timeline" 
                    href="https://twitter.com/saxobank?ref_src=twsrc%5Etfw">
                    Tweets by saxobank
                    </a> </div> 	
            </td>
            <td valign="top">
                    <div style="height: 1000px; overflow-y: scroll;">
                    <a class="twitter-timeline" href="https://twitter.com/DailyFX?ref_src=twsrc%5Etfw">Tweets by DailyFX</a> 
                </div> 	
            </td>
        </tr>
    </table>
</div>
{/if}