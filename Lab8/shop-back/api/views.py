from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category


def product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": product.category.id,
    }


def category_to_dict(category):
    return {
        "id": category.id,
        "name": category.name,
    }


def products_list(request):
    products = Product.objects.all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product_to_dict(product))


def categories_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(category) for category in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = get_object_or_404(Category, id=id)

    if request.method == "GET":
        return JsonResponse(category_to_dict(category))

    elif request.method == "DELETE":
        if category.products.exists():
            return JsonResponse(
                {"error": "Cannot delete this category because it is not empty."},
                status=400
            )

        category.delete()
        return JsonResponse({"message": "Category deleted successfully."})

    return JsonResponse({"error": "Method not allowed"}, status=405)


def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)


def products_by_price_range(request):
    min_price = request.GET.get("min")
    max_price = request.GET.get("max")

    try:
        products = Product.objects.all()

        if min_price is not None:
            min_price = float(min_price)
            products = products.filter(price__gte=min_price)

        if max_price is not None:
            max_price = float(max_price)
            products = products.filter(price__lte=max_price)

        data = [product_to_dict(product) for product in products]
        return JsonResponse(data, safe=False)

    except ValueError:
        return JsonResponse(
            {"error": "min and max must be numbers"},
            status=400
        )