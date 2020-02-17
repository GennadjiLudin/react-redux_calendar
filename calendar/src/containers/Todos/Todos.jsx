import React from 'react';
import { connect } from 'react-redux';
// import { DragDropContext } from 'react-beautiful-dnd';

import TodoList from '../../components/TodoList/TodoList';
import FilterTodo from '../../components/FilterTodo/FilterTodo';
import { sortTasksAction, changeIsAddModeAction } from '../../actions/actionCreator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './Todos.scss';


const Todos = (props) => {
    const { selectedDay, /*sortTasks,*/ changeIsAdd, isAddMode } = props;
    
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
        // <DragDropContext /*onDragEnd={onDragEnd}*/>
            <div className="todos">
                <div className="title">Список задач</div>
                {selectedDay && (
                    selectedDay.tasks.length === 0 ? (
                        <>
                            <span>В настояще время нет активных задач!</span>
                        </>
                    ) : (
                        <>
                            <TodoList />
                            <FilterTodo />
                        </>
                    )
                )}
                <FontAwesomeIcon
                    className="todos-add-btn"
                    onClick={() => changeIsAdd(isAddMode)}
                    icon={faPlus}
                />
            </div>
        // </DragDropContext>
    )
}

const mapStateToProps = state => {
    const { selectedDay, isAddMode } = state.tasks;
    return {
        selectedDay,
        isAddMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sortTasks: (droppableIndexStart, droppableIndexEnd, draggableId) => dispatch(sortTasksAction(droppableIndexStart, droppableIndexEnd, draggableId)),
        changeIsAdd: (isAddMode) => dispatch(changeIsAddModeAction(isAddMode)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
