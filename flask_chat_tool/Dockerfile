FROM python:3.10.5

WORKDIR /usr/src/app
ENV FLASK_APP = app

COPY requirements.txt /usr/src/app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python", "app.py"]