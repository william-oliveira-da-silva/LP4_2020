import React, {Component} from 'react';

<<<<<<< HEAD

export default class Grid extends Component {
    toCssClasse(numbers){
        const cols = numbers ? numbers.split(' ') : [];
        let classes = '';

        if(cols[0])
            classes += ` col-xs-${cols[0]}`
        if(cols[1])
            classes += ` col-sm-${cols[1]}`
        if(cols[2])
            classes += ` col-md-${cols[2]}`
        if(cols[3])
            classes += ` col-lg-${cols[3]}`
        return classes
    }
    render(){
        const gridClasses = this.toCssClasse(this.props.cols || 12);
=======
export default class Grid extends Component {
    toCssClasses(numbers){
        const cols = numbers ? numbers.split(' ') : []
        let classes = '';

        if (cols[0])
            classes += `col-xs-${cols[0]}`
        if (cols[1]) 
            classes += ` col-sm-${cols[1]}`
        if (cols[2]) 
            classes += ` col-md-${cols[2]}`
         if (cols[3]) 
            classes += ` col-lg-${cols[3]}`
        
        return classes
    }

    render(){
        const gridClasses = this.toCssClasses(this.props.cols || 12)
>>>>>>> 4fa8b6bc6b6f650a174d24c65c184f22a40cf231
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
<<<<<<< HEAD
        )
=======
        );
>>>>>>> 4fa8b6bc6b6f650a174d24c65c184f22a40cf231
    }
}