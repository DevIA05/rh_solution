FROM python:3.10-alpine
WORKDIR /app/backend
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip install --upgrade pip
COPY requirements.txt /app/backend/
RUN pip install -r requirements.txt
COPY . /app/backend/
EXPOSE 8000
CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "rh_solution.wsgi:application"]
