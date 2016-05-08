'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function() {
  beforeEach( module('phonecatApp') )

  it('should create "phones" model with 3 phones', inject( function( $controller ) {
    var scope = {}
    var ctrl  = $controller( 'PhoneListCtrl', { $scope: scope } )

    expect( scope.phones.length ).toEqual(3)
  }))

  it('should have a name property', inject( function( $controller ) {
    var scope = {}
    var ctrl  = $controller( 'PhoneListCtrl', { $scope: scope })

    expect( scope.name ).toEqual('World')
  }))

})
