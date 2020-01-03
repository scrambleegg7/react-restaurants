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



