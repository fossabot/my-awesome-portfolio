---
view: posts
title: Todos posts
description: 
---

<script>
export default {
  mounted () {
    const current = document.querySelectorAll('.sidebar-links .sidebar-heading.open span')
    if( current.length == 0 || new Date().getFullYear() != current[0].innerText ){
        document.querySelectorAll('.sidebar-links li:nth-child(2) span')[0].click()
    }
  }
}
</script>

Lorem ipsum dolor sit amet, ad cum verear platonem, at mel solum dolores. Vim meis lorem soluta ea, mea no assum eruditi reformidans. Pro inimicus definiebas reprimique ut. Munere noster duo ex.