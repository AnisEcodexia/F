import React from "react";

const VideoConfiguration = () => {
  return (
    <div class="container">
      <div class="rendered-form">
        <h1>Video Configuration</h1>
        <img
          style={{ width: "800px", height: "450px", overflow: "auto" }}
          src={require("assets/img/1.png").default}
          alt="Card image cap"
        />
        <div class="formbuilder-text form-group field-text-1656204884948">
          <label for="text-1656204884948" class="formbuilder-text-label">
            Label
          </label>
          <input
            type="text"
            class="form-control"
          />
        </div>
        <div class="formbuilder-textarea form-group field-textarea-1656204886384">
          <label
            for="textarea-1656204886384"
            class="formbuilder-textarea-label"
          >
            Description
          </label>
          <textarea
            type="textarea"
            class="form-control"
          ></textarea>
        </div>
        <div class="formbuilder-text form-group field-text-1656204887335">
          <label for="text-1656204887335" class="formbuilder-text-label">
            Floor{" "}
          </label>
          <input
            type="text"
            class="form-control"
          />
        </div>
        <div class="formbuilder-text form-group field-text-1656204887543">
          <label for="text-1656204887543" class="formbuilder-text-label">
            Section
          </label>
          <input
            type="text"
            class="form-control"
          />
        </div>
        <div class="formbuilder-button form-group field-button-1656206925352">
          <button
            type="button"
            class="btn-default btn"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoConfiguration;
