import "../styles/filters.css";

const Filters = () => {
  return (
    <div className="wrapper px-md py-1">
      <fieldset className="py-1 px-2 flex-row-start">
        <legend>
          <h4>Filters</h4>
        </legend>
        <div className="flex-row-sb">
          <label htmlFor="tags" className="mr-2 dropdown-con flex-row-start">
            <h5 className="mr-1">Sort By:</h5>
            <select name="tags" id="tags" className="select mx-sm text-bold">
              <option value="priority">priority</option>
              <option value="assigned">assigned</option>
              <option value="flagged">flagged</option>
              <option value="due date">due date</option>
            </select>
          </label>
          <div className="ml-auto">
            <div class="new">
              <form className="flex-row-start">
                <h5>Tags:</h5>
                <div class="form-group mx-md my-sm">
                  <input type="checkbox" id="work" />
                  <label for="work">Work</label>
                </div>
                <div class="form-group mx-md my-sm">
                  <input type="checkbox" id="health" />
                  <label for="health">Health</label>
                </div>
                <div class="form-group mx-md my-sm">
                  <input type="checkbox" id="creativity" />
                  <label for="creativity">Creativity</label>
                </div>
                <div class="form-group mx-md my-sm">
                  <input type="checkbox" id="chores" />
                  <label for="chores">Chores</label>
                </div>
                <div class="form-group mx-md my-sm">
                  <input type="checkbox" id="teams" />
                  <label for="teams">Teams</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export { Filters };
