import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import TodoList from '../../components/TodoList/TodoList';
import FilterTodo from '../../components/FilterTodo/FilterTodo';
import { addTaskAction, sortTasksAction } from '../../actions/actionCreator';

import './Todos.scss';


const Todos = (props) => {
    const { selectedDay, addTask, sortTasks } = props;

    // const addTask = ({key}) => {
    //     const {taskText} = this.state;

    //     if(taskText.trim() !== '' && key === 'Enter') {
    //         const { addTask } = this.props;

    //         addTask((new Date()).getTime(), taskText, false);

    //         this.setState({
    //             taskText: '',
    //         });
    //     }
    // }
    
    // const onDragEnd = ({destination, source, draggableId}) => {
    //     if(!destination) {
    //         return;
    //     }
        
    //     sortTasks(
    //         source.index,
    //         destination.index,
    //         draggableId
    //     );
    // }

    return (
        <DragDropContext /*onDragEnd={onDragEnd}*/>
            <div className="todos">
                <div className="title">Список задач</div>
                {selectedDay && (
                    selectedDay.tasks.length === 0 ? (
                        <>
                            <span>В настояще время нет активных задач!</span>
                            <button>Добавить задачу</button>
                        </>
                    ) : (
                        <>
                            <TodoList 
                                selectedId={selectedDay.id} 
                            />
                            <FilterTodo />
                        </>
                    )
                )}
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => {
    const { selectedDay } = state.tasks;
    return {
        selectedDay,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTask: (id, text, isCompleted) => dispatch(addTaskAction(id, text, isCompleted)),
        sortTasks: (droppableIndexStart, droppableIndexEnd, draggableId) => dispatch(sortTasksAction(droppableIndexStart, droppableIndexEnd, draggableId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
