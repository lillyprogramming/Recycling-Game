"use strict"
const game = new Phaser.Game(1350, 700, Phaser.AUTO, 'GameCanvas', { create, preload, update })

function preload () {
    game.load.image("rcbg","images/rcbg.png")
    game.load.image("prb","images/rbs/prb.png")
    game.load.image("erb","images/rbs/erb.png")
    game.load.image("mrb","images/rbs/mrb.png")
    game.load.image("parb","images/rbs/parb.png")
    game.load.image("orb","images/rbs/orb.png")
    game.load.image("grb","images/rbs/grb.png")

    game.load.image("ebo","images/objs/e/ebo.png")
    game.load.image("ecalo","images/objs/e/ecalo.png")
    game.load.image("eco","images/objs/e/eco.png")
    game.load.image("elbo","images/objs/e/elbo.png")

    game.load.image("gbo","images/objs/g/gbo.png")
    game.load.image("gmo","images/objs/g/gmo.png")
    game.load.image("gwo","images/objs/g/gwo.png")

    game.load.image("mco","images/objs/m/mco.png")
    game.load.image("mgo","images/objs/m/mgo.png")
    game.load.image("mpco","images/objs/m/mpco.png")
    game.load.image("mpo","images/objs/m/mpo.png")
    game.load.image("mtco","images/objs/m/mtco.png")

    game.load.image("obo","images/objs/o/obo.png")
    game.load.image("obpo","images/objs/o/obpo.png")
    game.load.image("ofo","images/objs/o/ofo.png")

    game.load.image("pbo","images/objs/p/pbo.png")
    game.load.image("pco","images/objs/p/pco.png")
    game.load.image("pso","images/objs/p/pso.png")

    game.load.image("pano","images/objs/pa/pano.png")
    game.load.image("paoo","images/objs/pa/paoo.png")
    game.load.image("papo","images/objs/pa/papo.png")
}

function create() {
    rcbg = game.add.image(0, 0, "rcbg")

    prb = game.add.image(100, 470, "prb")
    prb.inputEnabled = true

    mrb = game.add.image(300, 470, "mrb")
    mrb.inputEnabled = true  

    orb = game.add.image(500, 470, "orb")
    orb.inputEnabled = true

    erb = game.add.image(700, 470, "erb")
    erb.inputEnabled = true

    grb = game.add.image(900, 470, "grb")
    grb.inputEnabled = true

    parb = game.add.image(1100, 470, "parb")
    parb.inputEnabled = true

    ebo = game.add.image(1200, 100, "ebo")
    ebo.inputEnabled = true;
    ebo.input.enableDrag();
    ecalo = game.add.image(500, 300, "ecalo")
    ecalo.inputEnabled = true;
    ecalo.input.enableDrag();
    eco = game.add.image(600, 60, "eco")
    eco.inputEnabled = true;
    eco.input.enableDrag();
    elbo = game.add.image(70, 350, "elbo")
    elbo.inputEnabled = true;
    elbo.input.enableDrag();

    gbo = game.add.image(1100, 300, "gbo")
    gbo.inputEnabled = true;
    gbo.input.enableDrag();
    gmo = game.add.image(900, 200, "gmo")
    gmo.inputEnabled = true;
    gmo.input.enableDrag();
    gwo = game.add.image(200, 100, "gwo")
    gwo.inputEnabled = true;
    gwo.input.enableDrag();

    mgo = game.add.image(50, 150, "mgo")
    mgo.inputEnabled = true;
    mgo.input.enableDrag();
    mpco = game.add.image(1000, 40, "mpco")
    mpco.inputEnabled = true;
    mpco.input.enableDrag();
    mco = game.add.image(250, 300, "mco")
    mco.inputEnabled = true;
    mco.input.enableDrag();
    mpo = game.add.image(400, 50, "mpo")
    mpo.inputEnabled = true;
    mpo.input.enableDrag();
    mtco = game.add.image(900, 350, "mtco")
    mtco.inputEnabled = true;
    mtco.input.enableDrag();

    obo = game.add.image(1250, 254, "obo")
    obo.inputEnabled = true;
    obo.input.enableDrag();
    obpo = game.add.image(754, 200, "obpo")
    obpo.inputEnabled = true;
    obpo.input.enableDrag();
    ofo = game.add.image(400, 241, "ofo")
    ofo.inputEnabled = true;
    ofo.input.enableDrag();

    pbo = game.add.image(995, 103, "pbo")
    pbo.inputEnabled = true;
    pbo.input.enableDrag();
    pso = game.add.image(856, 47, "pso")
    pso.inputEnabled = true;
    pso.input.enableDrag();
    pco = game.add.image(105, 20, "pco")
    pco.inputEnabled = true;
    pco.input.enableDrag();

    pano = game.add.image(595, 291, "pano")
    pano.inputEnabled = true;
    pano.input.enableDrag();
    paoo = game.add.image(996, 253, "paoo")
    paoo.inputEnabled = true;
    paoo.input.enableDrag();
    papo = game.add.image(788, 312, "papo")
    papo.inputEnabled = true;
    papo.input.enableDrag();
}

function update() {
    if(gameWon == true) {
        
    }
    if(pbo.x > 100 && pbo.x < 228 && pbo.y > 470 && pbo.y < 647) {
        pbo.alpha = 0
        pbot = true
   }
   if(pco.x > 100 && pco.x < 228 && pco.y > 470 && pco.y < 647) {
        pco.alpha = 0
        pcot = true
    }
    if(pso.x > 100 && pso.x < 228 && pso.y > 470 && pso.y < 647) {
        pso.alpha = 0
        psot = true
    }
    if(mco.x > 300 && mco.x < 428 && mco.y > 470 && mco.y < 647) {
        mco.alpha = 0
        mcot = true
    }
    if(mgo.x > 300 && mgo.x < 428 && mgo.y > 470 && mgo.y < 647) {
        mgo.alpha = 0
        mgot = true
    }
    if(mpco.x > 300 && mpco.x < 428 && mpco.y > 470 && mpco.y < 647) {
        mpco.alpha = 0
        mpcot = true
    }
    if(mtco.x > 300 && mtco.x < 428 && mtco.y > 470 && mtco.y < 647) {
        mtco.alpha = 0
        mtcot = true
    }
    if(mpo.x > 300 && mpo.x < 428 && mpo.y > 470 && mpo.y < 647) {
        mpo.alpha = 0
        mpot = true
    }
    if(obo.x > 500 && obo.x < 628 && obo.y > 470 && obo.y < 647) {
        obo.alpha = 0
        obot = true
    }
    if(obpo.x > 500 && obpo.x < 628 && obpo.y > 470 && obpo.y < 647) {
        obpo.alpha = 0
        obpot = true
    }
    if(ofo.x > 500 && ofo.x < 628 && ofo.y > 470 && ofo.y < 647) {
        ofo.alpha = 0
        ofot = true
    }
    if(ebo.x > 700 && ebo.x < 828 && ebo.y > 470 && ebo.y < 647) {
        ebo.alpha = 0
        ebot = true
    }
    if(ecalo.x > 700 && ecalo.x < 828 && ecalo.y > 470 && ecalo.y < 647) {
        ecalo.alpha = 0
        ecalot = true
    }
    if(eco.x > 700 && eco.x < 828 && eco.y > 470 && eco.y < 647) {
        eco.alpha = 0
        ecot = true
    }
    if(elbo.x > 700 && elbo.x < 828 && elbo.y > 470 && elbo.y < 647) {
        elbo.alpha = 0
        elbot = true
    }
    if(gbo.x > 900 && gbo.x < 1028 && gbo.y > 470 && gbo.y < 647) {
        gbo.alpha = 0
        gbot = true
    }
    if(gmo.x > 900 && gmo.x < 1028 && gmo.y > 470 && gmo.y < 647) {
        gmo.alpha = 0
        gmot = true
    }
    if(gwo.x > 900 && gwo.x < 1028 && gwo.y > 470 && gwo.y < 647) {
        gwo.alpha = 0
        gwot = true
    }
    if(pano.x > 1100 && pano.x < 1228 && pano.y > 470 && pano.y < 647) {
        pano.alpha = 0
        panot = true
    }
    if(paoo.x > 1100 && paoo.x < 1228 && paoo.y > 470 && paoo.y < 647) {
        paoo.alpha = 0
        paoot = true
    }
    if(papo.x > 1100 && papo.x < 1228 && papo.y > 470 && papo.y < 647) {
        papo.alpha = 0
        papot = true
    }
}
let prb, orb, erb, mrb, parb, grb, rcbg
let ebo, ecalo, eco, elbo
let gbo, gmo, gwo
let mco, mgo, mpco, mpo, mtco
let obo, obpo, ofo
let pbo, pco, pso
let pano, paoo, papo

let ebot = false, ecalot = false, ecot = false, elbot = false
let gbot = false, gmot = false, gwot = false
let mcot = false, mgot = false, mpcot = false, mpot = false, mtcot = false
let obot = false, obpot = false, ofot = false
let pbot = false, pcot = false, psot = false
let panot = false, paoot = false, papot = false
let gameWon = false

function YouWin() {
    if(ebot == true&& ecalot == true && ecot == true && elbot == true&&gbot == true&& gmot == true&& gwot == true &&mcot == true&& mgot == true&& mpcot == true&& mpot == true&& mtcot == true &&obot == true&& obpot == true&& ofot == true &&pbot == true&& pcot == true&& psot == true&& panot == true&& paoot == true&& papot == true) {
        gameWon = true
    }
}