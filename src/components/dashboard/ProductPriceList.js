import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  // Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const products = [
  {
    id: uuid(),
    name: 'Tomatoes',
    imageUrl: '/static/images/products/tomato.jpg',
    updatedAt: moment().subtract(2, 'hours'),
    price: 3500,
    qty: 'Kg'
  },
  {
    id: uuid(),
    name: 'Onions',
    imageUrl: '/static/images/products/onion.png',
    updatedAt: moment().subtract(2, 'hours'),
    price: 3000,
    qty: 'Kg'
  },
  {
    id: uuid(),
    name: 'Spinach',
    imageUrl: '/static/images/products/spinach.jpg',
    updatedAt: moment().subtract(3, 'hours'),
    price: 2000,
    qty: 'Bunch'
  },
  {
    id: uuid(),
    name: 'Pineapple',
    imageUrl: '/static/images/products/pineapple.png',
    updatedAt: moment().subtract(5, 'hours'),
    price: 6000,
    qty: 'Piece'
  },
];

const ProductPriceList = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Product Price List"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={(
              <div>
                <div>
                  {product.price}
                  {' '}
                  ugx per
                  {' '}
                  {product.qty}
                </div>
                <div>
                  Updated
                  {' '}
                  {product.updatedAt.fromNow()}
                </div>
              </div>
            )}

          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default ProductPriceList;
