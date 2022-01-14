consumer_secret.js
## HTTP Request

curl -X POST https://example.com/wc-api/v3/products/categories \
	-u consumer_key:consumer_secret \
	-H "Content-Type: application/json" \
	-d '{
  "product_category": {
    "name": "Clothing"
  }
}'
var data = {
  product_category: {
    name: 'Clothing'
  }
};

WooCommerce.post('products/categories', data, function(err, data, res) {
  console.log(res);
});
<?php
$data = [
    'product_category' => [
        'name' => 'Clothing'
    ]
];

print_r($woocommerce->post('products/categories', $data));
?>
data = {
    "product_category": {
        "name": "Clothing"
    }
}

print(wcapi.post("products/categories", data).json())
data = {
  product_category: {
    name: "Clothing"
  }
}

woocommerce.post("products/categories", data).parsed_response
JSON response example:

{
  "product_category": {
    "id": 9,
    "name": "Clothing",
    "slug": "clothing",
    "parent": 0,
    "description": "",
    "display": "default",
    "image": "",
    "count": 0
  }
}

curl -X DELETE https://example.com/wc-api/v3/products/categories/9 \
	-u consumer_key:consumer_secret
WooCommerce.delete('products/categories/9', function(err, data, res) {
  console.log(res);
});
<?php print_r($woocommerce->delete('products/categories/9')); ?>
print(wcapi.delete("products/categories/9").json())
woocommerce.delete("products/categories/9").parsed_response
JSON response example:

{
  "message": "Deleted product_category"
}