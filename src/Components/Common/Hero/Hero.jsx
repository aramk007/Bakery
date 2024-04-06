import React from "react";

export default function Hero() {
  return (
    <div class="container-fluid bg-primary py-5 mb-5 hero-header">
      <div class="container py-5">
        <div class="row justify-content-start">
          <div class="col-lg-8 text-center text-lg-start">
            <h1 class="font-secondary text-primary mb-4">Super Crispy</h1>
            <h1 class="display-1 text-uppercase text-white mb-4">CakeZone</h1>
            <h1 class="text-uppercase text-white">The Best Cake In London</h1>
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a href="" class="btn btn-primary border-inner py-3 px-5 me-5">
                Read More
              </a>
              <button
                type="button"
                class="btn-play"
                data-bs-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-bs-target="#videoModal"
              >
                <span></span>
              </button>
              <h5 class="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
                Play Video
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}