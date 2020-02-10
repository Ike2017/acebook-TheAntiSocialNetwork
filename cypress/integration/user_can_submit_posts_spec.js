describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.visit('/posts');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('Hello, world!');
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', 'Hello, world!');
  });

  it('can delete posts', function(){
    cy.visit('/posts');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('H!');
    cy.get('#new-post-form').submit();
    cy.get('.posts').should('contain', 'H!');
    cy.contains('delete').first().click();
    cy.get('.posts').should('not.contain', 'H!');
  });

//
//
//   Bookmark.create(url: 'http://www.makersacademy.com', title: 'Makers Academy')
//     visit('/bookmarks')
//     expect(page).to have_link('Makers Academy', href: 'http://www.makersacademy.com')
//
//     first('.bookmark').click_button 'Delete'
//
//     expect(current_path).to eq '/bookmarks'
//     expect(page).not_to have_link('Makers Academy', href: 'http://www.makersacademy.com')
});
