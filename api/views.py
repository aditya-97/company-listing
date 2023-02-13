import csv
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.shortcuts import render


@csrf_exempt
def list_companies_api(request):
    if request.method == 'GET':
        with open('sp500_companies.csv', mode='r') as file:
            # reading the CSV file
            csv_file = csv.DictReader(file)
            return JsonResponse(list(csv_file), safe=False)


def list_companies(request):
    return render(request, 'home.html')
