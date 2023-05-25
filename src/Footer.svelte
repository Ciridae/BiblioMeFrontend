<footer class="row">
    <div class="col-sm-6 pr-5 d-flex align-items-center justify-content-end">
        <div class="d-flex align-items-center">
            &copy; {new Date().getFullYear()} BiblioMe. Todos los derechos reservados
        </div>
    </div>
    <div class="col-sm-6 pl-5">
        <div class="d-flex align-items-center justify-content-start">
            <span>Backend</span>
            <span></span>
            <span>Frontend</span>
        </div>
    </div>
</footer>

<style>
    footer {
        height: 150px;
        background-color: #f4f1ea !important;
        align-items: center;
    }

    footer div {
        height: 100%;
    }

    @media (max-width: 425px) {
        footer div {
            height: 50%;
            padding-right: 0px !important;
            padding-left: 0px !important;
        }

        footer>div>div {
            justify-content: center !important;
        }
    }
</style>
