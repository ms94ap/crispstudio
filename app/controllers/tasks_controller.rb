class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  def new
    @task = Task.new
  end

  def show
  end

  def index
    @tasks = Task.all
    respond_to do |format|
      format.html
      format.json { render json: @tasks }
     end
  end
  
  def edit
  end

  def update
    if @task.update(task_params)
      redirect_to tasks_path
    else
      respond_to do |format|
        format.html { redirect_to tasks_path }
        format.json { }
      end
    end
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      redirect_to tasks_path
    else
      render :new
    end
  end

  def destroy
    @task.destroy
    respond_to do |format|
      format.html { redirect_to tasks_path }
      format.json { }
    end
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :date)
  end
end
