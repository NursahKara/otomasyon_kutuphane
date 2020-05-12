import React from 'react'
import { BarChart, Grid, YAxis,XAxis } from 'react-native-svg-charts'
import { View, ActivityIndicator } from 'react-native'
import CustomHeader from './CustomHeader';
import { getDatabase } from '../components/common/database';
import { connect } from 'react-redux';
import * as scale from 'd3-scale'
//https://github.com/JesperLekland/react-native-svg-charts-examples

class Graphics extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            totalFavoriteCount: 0,
            favBooks: [],
            favBooksLikeCount: []
        }
        this.fetchData();
    }
    async fetchData() {
        var dbRef = getDatabase().ref('Favorite_Books');
        var values = undefined;
        var isbns = [];
        var topIsbns = [];
        var favBooksLikeCount = [];
        await dbRef.once("value", (snapshot) => {
            if (!snapshot.exists()) {
                return;
            }
            values = Object.values(snapshot.val());
        });
        if (values == undefined) {
            this.setState({
                isLoad: true,
            });
            return;
        }
        const grp = values.map(w => w.bookIsbn).sort().reduce((r, c, i, a) => {
            r[c] = [...r[c] || [], c]
            r[c] = (a[i + 1] != c && r[c].length == 1) ? r[c][0] : r[c]
            return r
        }, {})
        Object.values(grp).forEach((item) => {
            if (typeof item == 'object') {
                isbns.push(item);
            }
        });
        isbns = isbns.sort((x, y) => x.length - y.length).reverse();
        //console.log(isbns.length);
        if (isbns.length < 5) {
            isbns.forEach(item => {
                topIsbns.push(item[0]);
                favBooksLikeCount.push(item.length);
            });
        }
        else {
            for (var i = 0; i < 5; i++) {
                topIsbns.push(isbns[i][0]);
                favBooksLikeCount.push(isbns[i].length);
            }
        }
        var favBooks = [];
        this.props.books.forEach((book) => {
            if (topIsbns.includes(book.isbn)) {
                favBooks.push(book);
            }
        })
        this.setState({
            isLoad: true,
            totalFavoriteCount: values.length,
            favBooks: favBooks,
            favBooksLikeCount: favBooksLikeCount
        });
    }
    render() {
        const data = [];
        if (this.state.isLoad) {
            var favBooksLikeCount = this.state.favBooksLikeCount;
            var favBooks = this.state.favBooks;
            for (var i = 0; i < favBooksLikeCount.length; i++) {
                data.push({
                    value: favBooksLikeCount[i],
                    label: favBooks[i].title
                });
            }
            console.log(data);
        }
        return (
            // <View>
            //     <CustomHeader title="İstatistikler" isHome={true} bg_white={true} navigation={this.props.navigation} />
            //     <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            //         {this.state.isLoad ?
            //             <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
            //                 <YAxis
            //                     data={data}
            //                     yAccessor={({ index }) => index}
            //                     scale={scale.ScaleBand}
            //                     contentInset={{ top: 10, bottom: 10 }}
            //                     spacing={0.2}
            //                     formatLabel={(_, index) => data[index].label}
            //                 />
            //                 <BarChart
            //                     style={{ flex: 1, marginLeft: 8 }}
            //                     data={data}
            //                     horizontal={true}
            //                     yAccessor={({ item }) => item.value}
            //                     svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            //                     contentInset={{ top: 10, bottom: 10 }}
            //                     spacing={0.2}
            //                     gridMin={0}
            //                 >
            //                     <Grid direction={Grid.Direction.VERTICAL} />
            //                 </BarChart>
            //            </View> : <ActivityIndicator size="small" color="#731873" style={{ marginTop:height/3,marginLeft:width/2.3,alignItems:'center',justifyContent:'center' }} />}
            //     </View>
            // </View>
            <View>
                 <CustomHeader title="İstatistikler" isHome={true} bg_white={true} navigation={this.props.navigation} />
                 <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.ScaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.1}
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 0,marginRight:20}}
                    data={data}
                    horizontal={false}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.1}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.HORIZONTAL}/>
                </BarChart>
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => index }
                    labelStyle={ { color: 'black' } }
                />
            </View>
            </View>
         
        )
    }

}
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(Graphics);