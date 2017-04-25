function minimax(marking, game, maximize = true, parent = true, depth = 0) {
    let winners = game.winners;
    if (winners.gameOver) {
        if (parent) return game;
        else if (winners.markings.length >= 2) return 0;
        else if (winners.markings[0] === marking) return 10 - depth;
        else return depth - 10;
    }

    depth++;
    let grouping = [maximize ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, null];
    let moves = game.moves(maximize ? marking : marking.inverse);
    for (let i = 0; i < moves.length; i++) {
        let score = minimax(marking, moves[i], !maximize, false, depth);
        grouping = ((maximize && grouping[0] < score) || (!maximize && grouping[0] > score)) ? [score, moves[i]] : grouping;
    }

    return grouping[parent ? 1 : 0];
}

export default minimax