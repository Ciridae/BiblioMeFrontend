<footer class="row mr-0">
    <div class="col-md-6 elemento-footer primer-elemento">
        <div>
            &copy; {new Date().getFullYear()} BiblioMe. Todos los derechos reservados
        </div>
    </div>
    <div class="col-md-6 elemento-footer segundo-elemento">
        <div>
            <i class="fab fa-github" />
            <a class="enlace" href="https://github.com/Ciridae/BiblioMe"
                >Backend</a
            >
            -
            <a class="enlace" href="https://github.com/Ciridae/BiblioMeFrontend"
                >Frontend</a
            >
        </div>
    </div>
</footer>

<style>
    footer {
        height: 150px;
        background-color: #f4f1ea !important;
        align-items: center;
    }

    .elemento-footer {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) {
        .elemento-footer {
            height: 100%;
        }

        .primer-elemento {
            justify-content: end;
        }

        .segundo-elemento {
            justify-content: start;
        }
    }
</style>
