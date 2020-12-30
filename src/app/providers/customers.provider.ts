import { Injectable } from '@angular/core';

@Injectable()
export class CustomerProvider {
    constructor() {}
    compainesTable = [
        'Birthday Rewards',
        'Happy Hour Rewards',
        'Win-Back Rewards',
        'Birthday Rewards',
        'Birthday Rewards',
        'Birthday Rewards',
        'Birthday Rewards',
        'Birthday Rewards',
    ];
    topCustomers: any[] = [
        {
            img: 'assets/img/Image.png',
            name: 'Mohamed magdy',
            name_details: '',
            title: '10.000EGP',
            title_details: '500 punches',
        },
        {
            img: 'assets/img/Image-1.png',
            name: 'Mohamed magdy',
            name_details: '',
            title: '10.000EGP',
            title_details: '500 punches',
        },
        {
            img: 'assets/img/Image-2.png',
            name: 'Mohamed magdy',
            name_details: '',
            title: '10.000EGP',
            title_details: '500 punches',
        },
        {
            img: 'assets/img/Image-3.png',
            name: 'Mohamed magdy',
            name_details: '',
            title: '10.000EGP',
            title_details: '500 punches',
        },
        {
            img: 'assets/img/Image-4.png',
            name: 'Mohamed magdy',
            name_details: '',
            title: '10.000EGP',
            title_details: '500 punches',
        },
    ];

    feeds: any[] = [
        {
            img: 'assets/img/Image.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Icon feather-gift.png',
            },
        },
        {
            img: 'assets/img/Image-1.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Group 487.png',
            },
        },
        {
            img: 'assets/img/Image-2.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Icon feather-gift.png',
            },
        },
        {
            img: 'assets/img/Image-3.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Group 487.png',
            },
        },
        {
            img: 'assets/img/Image-4.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Icon feather-gift.png',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Group 487.png',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Group 487.png',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
                img: 'assets/img/Icon feather-gift.png',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
            },
        },
        {
            img: 'assets/img/Avatar.png',
            name: 'Mohamed magdy',
            feed: 'blue berry cheese cake',
            date: {
                text: 'Today',
                time: '08:00 PM',
            },
        },
    ];
    total_customers: any[] = [
        {
            title: 'total customer',
            count: '8571',
        },
        {
            title: 'total punches',
            count: '8571',
        },
        {
            title: 'REDEMED REWARDS',
            count: '8571',
        },
    ];
    redeemeds: any[] = [
        {
            name: 'cofee',
            count: '50',
        },
        {
            name: 'HairCut',
            count: '44',
        },
        {
            name: 'HaiHillside ShisharCut',
            count: '40',
        },
        {
            name: 'cofee',
            count: '50',
        },
        {
            name: 'HairCut',
            count: '44',
        },
        {
            name: 'HaiHillside ShisharCut',
            count: '40',
        },
        {
            name: 'HaiHillside ShisharCut',
            count: '40',
        },
        {
            name: 'cofee',
            count: '50',
        },
    ];
    zeal_table: any[] = [
        {
            branch_name: 'Ahmed Mohamed',
            total_Punches: '1021',
            today_punches: '25',
            reward_redeemed: '100',
            total_spent: '285,259EGP',
        },
        {
            branch_name: 'Ahmed Mohamed',
            total_Punches: '1021',
            today_punches: '25',
            reward_redeemed: '100',
            total_spent: '285,259EGP',
        },
        {
            branch_name: 'Ahmed Mohamed',
            total_Punches: '1021',
            today_punches: '25',
            reward_redeemed: '100',
            total_spent: '285,259EGP',
        },
        {
            branch_name: 'Ahmed Mohamed',
            total_Punches: '1021',
            today_punches: '25',
            reward_redeemed: '100',
            total_spent: '285,259EGP',
        },
    ];
}
