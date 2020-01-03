<Card>
<CardImg src={item.image} alt={item.name}>
<CardBody>
    <CardTitle>
        {item.name}
    </CardTitle>
        { item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }  
    <CardText>{item.description}</CardText>
</CardBody>
</CardImg>/
</Card>


<showImage item={this.state.dishes.filter( (dish) => dish.featered )[0] }  />


<ShowImage item={dish_selected} />
<ShowImage item={promo_selected} />
<ShowImage item={leader_selected} />



<div key={dish.id} className="col-12 mt-5">
<Media tag="li">
  <Media left middle>
      <Media object src={dish.image} alt={dish.name} />
  </Media>
  <Media body className="ml-5">
    <Media heading>{dish.name}</Media>
    <p>{dish.description}</p>
  </Media>
</Media>
</div>
);        
