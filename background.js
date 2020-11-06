//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
//$("body").append('Test');

function getElementsByXPath(xpath) {
   const result = new XPathEvaluator()
      .createExpression(xpath)
      .evaluate(document, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    const array  = []
    let node
    if(result !== null){
        while ((node = result.iterateNext()) != null){
            array.push(node);
        }
    }
   return array
  }


// need to clean up the internval
setInterval(()=>{
    const postYouMayLike = getElementsByXPath("//*[text() = 'Post you may like']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]" );
    const suggestedForYou =  getElementsByXPath("//*[text() = 'Suggested for you']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]");
    const sponso1 =  getElementsByXPath("//*[text() = 'Sponsored']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]");
    const sponso2 =  getElementsByXPath("//*[contains(@aria-label,'Sponsored')]/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]");
    sponso1.forEach(node => node.style.display ='none')
    sponso2.forEach(node => node.style.display ='none')
    postYouMayLike.forEach(node => node.style.display ='none')
    suggestedForYou.forEach(node => node.style.display ='none')
  },500)

   