class GizmosController < ApplicationController
  before_action :set_gizmo, only: %i[ show edit update destroy ]

  # GET /gizmos or /gizmos.json
  def index
    @gizmos = Workspace.first.gizmos
    render 'x_table/index'
  end

  # GET /gizmos/1 or /gizmos/1.json
  def show
    render 'x_table/index'
  end

  # GET /gizmos/new
  def new
    @gizmo = Gizmo.new
  end

  # GET /gizmos/1/edit
  def edit
  end

  # POST /gizmos or /gizmos.json
  def create
    @gizmo = Gizmo.new(gizmo_params)

    respond_to do |format|
      if @gizmo.save
        format.html { redirect_to gizmo_url(@gizmo), notice: "Gizmo was successfully created." }
        format.json { render :show, status: :created, location: @gizmo }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @gizmo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /gizmos/1 or /gizmos/1.json
  def update
    respond_to do |format|
      if @gizmo.update(gizmo_params)
        format.html { redirect_to gizmo_url(@gizmo), notice: "Gizmo was successfully updated." }
        format.json { render :show, status: :ok, location: @gizmo }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @gizmo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gizmos/1 or /gizmos/1.json
  def destroy
    @gizmo.destroy

    respond_to do |format|
      format.html { redirect_to gizmos_url, notice: "Gizmo was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gizmo
      @gizmo = Gizmo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def gizmo_params
      params.require(:gizmo).permit(:type, :name, :text1, :text2, :gizmo_id_id, :bool1, :int1)
    end
end
