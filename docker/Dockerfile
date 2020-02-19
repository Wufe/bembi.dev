FROM kesshin/development:v1.5

SHELL ["/bin/zsh", "-c"]

RUN mkdir -p /opt

WORKDIR /opt/build

COPY . /opt/build

RUN rm -rf /app && \
    mkdir -p /app && \
    go get github.com/rakyll/statik && \
    ./project/script/build.sh && \
    mv /opt/build/release/.* /app && \
    mv /opt/build/release/* /app && \
    mkdir -p /app/database && \
    rm -rf /opt/build

WORKDIR /app