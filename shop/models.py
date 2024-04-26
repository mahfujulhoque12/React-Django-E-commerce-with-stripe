from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


# Create your models here.

User = get_user_model()

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150,blank=True, null=True)
    mobile = models.CharField(max_length=11)
    address = models.TextField(blank=True,null=True)
    username = models.CharField(max_length=120, unique=True, blank=True, null=True)
    def __str__(self):
        return self.user.email
    

@receiver(post_save, sender=User)
def createCustomer(sender,instance,created,*args,**kwargs):  
    if created:
        Customer.objects.create(user=instance)
        Token.objects.create(user=instance)



@receiver(post_save, sender=Customer)
def createUsername(sender,instance,created,*args,**kwargs):  
    if created:
       instance.username = f"customer{instance.id}"
       instance.save()


class Category(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to='category', blank=True , null=True)
    details = models.TextField(blank=True ,null=True)
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title
    
class Brand(models.Model):
    title = models.CharField(max_length=120)
    logo = models.ImageField(upload_to='logo/', blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to='product/', blank=True, null=True)
    oldprice = models.PositiveIntegerField(blank=True, null=True)
    price = models.PositiveIntegerField()
    discount = models.PositiveIntegerField(default=0)
    category = models.ManyToManyField(Category)
    brand = models.ForeignKey(Brand,blank=True, null=True ,on_delete=models.CASCADE)
    details = models.TextField()
    tags = models.TextField(blank=True,null=True)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title        
    

class ProductView(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    view = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.product.title

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    title = models.TextField()

class Slider(models.Model):
    name = models.CharField(max_length=200)
    details = models.TextField()
    image = models.ImageField(upload_to='slider')
    url = models.URLField(default='#')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class TrendinProduct(models.Model):
    products = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)

class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    total = models.PositiveBigIntegerField()
    complit = models.BooleanField()
    date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.customer.user.email
    
class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    quantity = models.PositiveIntegerField()
    total = models.PositiveIntegerField()    

ORDER_STATUS =[
    ('Order Revived','Order Revived'),
    ('Order Processing','Order Processing'),
    ('On the Way','On the Way'),
    ('Order Completed','Order Completed'),
    ('Order Cancelled','Order Cancelled'),

]

class Order(models.Model):
    cart = models.ManyToManyField(Cart)
    name = models.CharField(max_length=201)
    mobile = models.CharField(max_length=15)
    address = models.TextField()
    email = models.EmailField()
    order_status = models.CharField(max_length=100,choices=ORDER_STATUS, default='Order Received')
    date = models.DateField(auto_now_add=True)





